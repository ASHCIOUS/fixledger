import { describe, it, expect } from "vitest";
import { formatCurrency } from "../utils/currency";

describe("currency utils", () => {
  it("formats usd", () => {
    expect(formatCurrency(1000)).toBe("$1,000.00");
  });
});
