import { describe, it, expect } from "vitest";
import { isEmpty } from "../utils/array";

describe("array utils", () => {
  it("checks if empty", () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1])).toBe(false);
  });
});
