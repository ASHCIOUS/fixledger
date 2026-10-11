import { describe, it, expect } from "vitest";
import { sanitizeEmail, isValidEmail } from "../utils/email";

describe("email utils", () => {
  it("sanitizes email", () => {
    expect(sanitizeEmail("  Test@Example.COM  ")).toBe("test@example.com");
  });
  it("validates email", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("invalid")).toBe(false);
  });
});
