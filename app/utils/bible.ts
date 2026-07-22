/**
 * Formats a gospel/scripture query string into the format expected by imankatolik.or.id.
 * For example:
 * - "Yoh 20:1,11-18" -> "Yoh20:1;Yoh20:11-18;"
 * - "Mat 15:1-2.10-14" -> "Mat15:1-2;Mat15:10-14;"
 * - "Mat 18:1-5.10.12-14" -> "Mat18:1-5;Mat18:10;Mat18:12-14;"
 * - "Mat 1:1-16.18-23 (panjang) atau Mat 1:18-23 (singkat)" -> "Mat1:1-16;Mat1:18-23;"
 */
export function formatGospelQuery(query: string): string {
  // Split by "atau" (case insensitive)
  const segments = query.split(/\s+atau\s+/i);
  
  const allFormattedParts: string[] = [];
  
  for (const segment of segments) {
    // Remove parentheticals, e.g. "(panjang)", "(singkat)" and trim
    const cleanSegment = segment.replace(/\([^)]*\)/g, '').trim();
    if (!cleanSegment) continue;
    
    // Match [Book] [Chapter]:[Verses]
    const match = cleanSegment.match(/^([1-3]?\s*[a-zA-Z]+(?:\.)?)\s+(\d+)\s*:\s*(.*)$/);
    if (!match) {
      // Fallback: remove spaces
      allFormattedParts.push(cleanSegment.replace(/\s+/g, ''));
      continue;
    }
    
    const book = match[1].replace(/[\s.]/g, ''); // e.g. "Yoh", "Mat"
    const chapter = match[2];                  // e.g. "20"
    const versesPart = match[3];                // e.g. "1,11-18" or "1-2.10-14"
    
    // Split verses by comma or dot
    const parts = versesPart.split(/[,.]/);
    
    for (const part of parts) {
      const cleanPart = part.trim();
      if (!cleanPart) continue;
      
      // Check for chapter-crossing range like "21-19:1" or "34-11:1"
      const crossMatch = cleanPart.match(/^(\d+)-(\d+):(\d+)$/);
      if (crossMatch) {
        const startVerse = crossMatch[1];
        const endChapter = crossMatch[2];
        const endVerse = crossMatch[3];
        allFormattedParts.push(`${book}${chapter}:${startVerse}-99`);
        allFormattedParts.push(`${book}${endChapter}:1-${endVerse}`);
      } else if (/^[a-zA-Z]/.test(cleanPart)) {
        allFormattedParts.push(cleanPart.replace(/\s+/g, ''));
      } else {
        allFormattedParts.push(`${book}${chapter}:${cleanPart}`);
      }
    }
  }
  
  // Deduplicate
  const uniqueParts = Array.from(new Set(allFormattedParts));
  
  if (uniqueParts.length === 0) return '';
  return uniqueParts.join(';') + ';';
}
