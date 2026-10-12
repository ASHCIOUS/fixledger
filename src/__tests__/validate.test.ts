import { describe, it, expect } from "vitest";
import { isNumber } from "../utils/validate";

describe("validate", () => {
  it("checks number", () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber("5")).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });
});
