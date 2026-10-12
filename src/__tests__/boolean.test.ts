import { describe, it, expect } from "vitest";
import { isTruthy } from "../utils/boolean";

describe("boolean utils", () => {
  it("checks truthiness", () => {
    expect(isTruthy("hi")).toBe(true);
    expect(isTruthy("")).toBe(false);
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy(1)).toBe(true);
  });
});
