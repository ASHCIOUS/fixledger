import { describe, it, expect } from "vitest";
import { toNumber } from "../utils/number";

describe("number utils", () => {
  it("converts to number", () => {
    expect(toNumber("123")).toBe(123);
    expect(toNumber("abc")).toBe(0);
    expect(toNumber(45)).toBe(45);
  });
});
