export type sanitizeType = (text: string) => string;

export default function sanitize(text: string) {
    return text + " sanitized";
}