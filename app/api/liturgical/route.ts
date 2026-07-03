import { type NextRequest } from 'next/server';
import { LITURGICAL_CALENDAR_JULY_2026 } from '../../data/liturgical-calendar';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let dateStr = searchParams.get('date');

    // If no date is specified, use today's date formatted as YYYY-MM-DD
    if (!dateStr) {
      const now = new Date();
      // Adjust to UTC+7 (the user's local timezone from metadata) or format standard YYYY-MM-DD
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      dateStr = `${year}-${month}-${day}`;
    }

    const dayData = LITURGICAL_CALENDAR_JULY_2026.find(item => item.date === dateStr);

    if (!dayData) {
      return Response.json(
        { 
          error: 'Data not found', 
          message: `Liturgical data is only available for July 2026. Requested date: ${dateStr}` 
        },
        { status: 404 }
      );
    }

    return Response.json(dayData);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return Response.json(
      { error: 'Internal Server Error', message },
      { status: 500 }
    );
  }
}
