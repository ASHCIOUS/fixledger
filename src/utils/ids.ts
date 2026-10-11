/**
 * Parse and validate IDs from URL params. Ensures positive integers.
 */
export function parseId(id: string | string[] | undefined): number {
  const raw = Array.isArray(id) ? id[0] : id;
  const num = raw ? parseInt(raw, 10) : NaN;
  if (!Number.isFinite(num) || num <= 0 || !Number.isInteger(num)) {
    throw new Error("Invalid id");
  }
  return num;
}
