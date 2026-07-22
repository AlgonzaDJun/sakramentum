import { type NextRequest } from 'next/server';
import { formatGospelQuery } from '@/app/utils/bible';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query) {
      return Response.json(
        { error: 'Bad Request', message: 'Query parameter "q" is required' },
        { status: 400 }
      );
    }

    // Format the query using the custom formatter
    const formattedQuery = encodeURIComponent(formatGospelQuery(query));
    const targetUrl = `https://www.imankatolik.or.id/alkitabq.php?q=${formattedQuery}`;

    // Fetch the raw HTML from the external website
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Failed to fetch scripture', message: `External site returned status ${response.status}` },
        { status: 502 }
      );
    }

    // Read response as arrayBuffer and decode as windows-1252 to handle legacy indonesian page encoding correctly
    const arrayBuffer = await response.arrayBuffer();
    const decoder = new TextDecoder('windows-1252');
    const html = decoder.decode(arrayBuffer);

    // Parse verses using regex
    const verses: { verse: string; text: string }[] = [];

    // The structure:
    // <tr valign="top">
    //   <td class="v" width="5%" style="font-size:11px;"><b>Yoh&nbsp;20:24</b></td>
    //   <td class="v" width="95%" style="text-align:justify">Tetapi Tomas...<br /><br /></td>
    // </tr>
    const rowRegex = /<tr[^>]*?>[\s\S]*?<td[^>]*?><b>(.*?)<\/b><\/td>[\s\S]*?<td[^>]*?style="text-align:justify"[^>]*?>([\s\S]*?)<\/td>[\s\S]*?<\/tr>/gi;

    let match;
    while ((match = rowRegex.exec(html)) !== null) {
      const verseLabel = match[1].replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
      const rawText = match[2];
      
      // Clean up text
      const cleanText = rawText
        .replace(/<br\s*\/?>/gi, ' ') // replace line breaks with spaces
        .replace(/<\/?[^>]+(>|$)/g, '') // strip other html tags
        .replace(/&nbsp;/g, ' ') // replace non-breaking spaces
        .replace(/&rsquo;/g, "'")
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&ndash;/g, '-')
        .replace(/\s+/g, ' ') // normalize spaces
        .trim();

      if (verseLabel && cleanText) {
        verses.push({
          verse: verseLabel,
          text: cleanText,
        });
      }
    }

    // Fallback parser if the table structure is slightly different
    if (verses.length === 0) {
      const cellRegex = /<td[^>]*?><b>(.*?)<\/b><\/td>[\s\S]*?<td[^>]*?>([\s\S]*?)<\/td>/gi;
      let match2;
      while ((match2 = cellRegex.exec(html)) !== null) {
        const verseLabel = match2[1].replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
        const rawText = match2[2];
        const cleanText = rawText
          .replace(/<br\s*\/?>/gi, ' ')
          .replace(/<\/?[^>]+(>|$)/g, '')
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        if (verseLabel.includes(':') || /\d/.test(verseLabel)) {
          if (verseLabel && cleanText && cleanText.length > 5) {
            // Filter out boilerplate links or texts
            if (!cleanText.includes('imankatolik.or.id') && !cleanText.includes('Berikut adalah referensi')) {
              verses.push({
                verse: verseLabel,
                text: cleanText,
              });
            }
          }
        }
      }
    }

    return Response.json({
      query,
      url: targetUrl,
      verses,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return Response.json(
      { error: 'Internal Server Error', message },
      { status: 500 }
    );
  }
}
