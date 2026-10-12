import { describe, it, expect } from "vitest";
import { truncate } from "../utils/truncate";

describe("truncate", () => {
  it("truncates long string", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
  });
  it("does not truncate short string", () => {
    expect(truncate("hi", 5)).toBe("hi");
  });
});
