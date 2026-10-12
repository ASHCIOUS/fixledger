import { describe, it, expect } from "vitest";
import { dateFormat } from "../utils/date";

describe("date utils", () => {
  it("formats date", () => {
    expect(dateFormat(new Date("2024-01-15"))).toBe("2024-01-15");
  });
});
