export function toNumber(value: string | number): number {
  if (typeof value === "number") return value;
  const n = Number(value);
  return isNaN(n) ? 0 : n;
}
