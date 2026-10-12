import { describe, it, expect } from "vitest";
import { formatBytes } from "../utils/bytes";

describe("bytes utils", () => {
  it("formats bytes", () => {
    expect(formatBytes(0)).toBe("0 Bytes");
    expect(formatBytes(1024)).toBe("1 KB");
  });
});
