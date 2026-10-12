import { describe, it, expect } from "vitest";
import { capitalize } from "../utils/string";

describe("string utils", () => {
  it("capitalizes string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("WORLD")).toBe("World");
  });
});
