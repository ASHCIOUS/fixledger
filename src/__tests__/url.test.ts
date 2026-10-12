import { describe, it, expect } from "vitest";
import { isValidUrl } from "../utils/url";

describe("url utils", () => {
  it("validates urls", () => {
    expect(isValidUrl("https://example.com")).toBe(true);
    expect(isValidUrl("not-a-url")).toBe(false);
  });
});
