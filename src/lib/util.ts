export const slugify = (str: string): string => {
    return str
        .replace(/(_|-{2,}|\s+)/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "")
        .replace(/^(-*)/, "")
        .replace(/-{2,}/g, "-")
        .replace(/(-*)$/, "")
        .toLowerCase()
        .trim()
}
