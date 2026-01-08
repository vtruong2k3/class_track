/**
 * Format date to Vietnamese format
 * @param date - Date to format
 * @returns Formatted date string (dd/mm/yyyy)
 */
export function formatDate(date: Date | string): string {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

/**
 * Format date and time to Vietnamese format
 * @param date - Date to format
 * @returns Formatted datetime string
 */
export function formatDateTime(date: Date | string): string {
    const d = new Date(date);
    const formattedDate = formatDate(d);
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${formattedDate} ${hours}:${minutes}`;
}
