export interface BusinessHoursStatus {
  isOpen: boolean;
  statusText: string;
  detailText: string;
  googleListingStatus: string;
  currentMumbaiTimeStr: string;
  currentDayName: string;
  currentDayIndex: number; // 0=Sunday, 1=Monday...
}

export const WEEKLY_HOURS = [
  { day: 'Monday', hours: '10:30 AM – 06:30 PM', dayIndex: 1, isClosed: false },
  { day: 'Tuesday', hours: '10:30 AM – 06:30 PM', dayIndex: 2, isClosed: false },
  { day: 'Wednesday', hours: '10:30 AM – 06:30 PM', dayIndex: 3, isClosed: false },
  { day: 'Thursday', hours: '10:30 AM – 06:30 PM', dayIndex: 4, isClosed: false },
  { day: 'Friday', hours: '10:30 AM – 06:30 PM', dayIndex: 5, isClosed: false },
  { day: 'Saturday', hours: '10:30 AM – 06:30 PM', dayIndex: 6, isClosed: false },
  { day: 'Sunday', hours: 'Closed (Appointment on prior calls only)', dayIndex: 0, isClosed: true },
];

/**
 * Calculates whether Cordeiro Real Estate is currently open based on Mumbai (Asia/Kolkata) local time.
 * Google Business Listing Hours: Mon - Sat : 10:30 AM - 06:30 PM (Open 6 Days a Week)
 * Sunday: Closed (Appointment on prior calls only)
 */
export function getBusinessHoursStatus(): BusinessHoursStatus {
  try {
    const now = new Date();
    // Format to Asia/Kolkata (IST: UTC+5:30)
    const partsFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = partsFormatter.formatToParts(now);
    const hourVal = parts.find((p) => p.type === 'hour')?.value;
    const minVal = parts.find((p) => p.type === 'minute')?.value;
    const weekdayVal = parts.find((p) => p.type === 'weekday')?.value || 'Monday';

    const hours = hourVal ? parseInt(hourVal, 10) : 0;
    const minutes = minVal ? parseInt(minVal, 10) : 0;
    const currentMinutes = hours * 60 + minutes;

    // 10:30 AM (630 mins) to 06:30 PM (18:30 = 1110 mins)
    const openMinutes = 10 * 60 + 30; // 10:30 AM
    const closeMinutes = 18 * 60 + 30; // 06:30 PM

    // Calculate day index (0=Sun, 1=Mon, ..., 6=Sat)
    const dayMap: Record<string, number> = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const currentDayIndex = dayMap[weekdayVal] ?? 1;
    const isSunday = currentDayIndex === 0;
    const isOpen = !isSunday && currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    const timeDisplayFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    const currentMumbaiTimeStr = `${timeDisplayFormatter.format(now)} IST`;

    let googleListingStatus = '';
    let statusText = '';
    let detailText = '';

    if (isSunday) {
      statusText = 'Closed Today';
      detailText = 'Sunday: Appointment on prior calls only';
      googleListingStatus = 'Closed · Opens 10:30 AM Mon';
    } else if (isOpen) {
      statusText = 'Open Now';
      detailText = 'Closes at 6:30 PM';
      googleListingStatus = 'Open · Closes 6:30 PM';
    } else {
      statusText = 'Closed Now';
      if (currentMinutes < openMinutes) {
        detailText = 'Opens at 10:30 AM';
        googleListingStatus = 'Closed · Opens 10:30 AM';
      } else {
        if (currentDayIndex === 6) {
          // Saturday evening
          detailText = 'Opens Mon at 10:30 AM (Sun by call)';
          googleListingStatus = 'Closed · Opens 10:30 AM Mon';
        } else {
          detailText = 'Opens tomorrow at 10:30 AM';
          googleListingStatus = 'Closed · Opens 10:30 AM tomorrow';
        }
      }
    }

    return {
      isOpen,
      statusText,
      detailText,
      googleListingStatus,
      currentMumbaiTimeStr,
      currentDayName: weekdayVal,
      currentDayIndex,
    };
  } catch {
    // Fallback if timezone conversion fails
    return {
      isOpen: true,
      statusText: 'Open Now',
      detailText: '10:30 AM - 06:30 PM',
      googleListingStatus: 'Open · Closes 6:30 PM',
      currentMumbaiTimeStr: '10:30 AM - 06:30 PM IST',
      currentDayName: 'Today',
      currentDayIndex: 1,
    };
  }
}
