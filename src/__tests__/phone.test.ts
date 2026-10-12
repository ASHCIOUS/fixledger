import { describe, it, expect } from "vitest";
import { normalizePhone } from "../utils/phone";

describe("phone utils", () => {
  it("normalizes phone", () => {
    expect(normalizePhone("(123) 456-7890")).toBe("1234567890");
  });
});
