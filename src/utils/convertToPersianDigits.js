export function convertToPersianDigits(number) {
    return number
        .toString()
        .replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}
