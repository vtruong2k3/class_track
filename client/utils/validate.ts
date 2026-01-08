/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate Vietnamese phone number
 */
export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
    return phoneRegex.test(phone);
}

/**
 * Check if string is empty or whitespace
 */
export function isEmpty(str: string): boolean {
    return !str || str.trim().length === 0;
}
