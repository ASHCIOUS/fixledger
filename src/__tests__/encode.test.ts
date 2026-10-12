import { describe, it, expect } from "vitest";
import { base64Encode } from "../utils/encode";

describe("encode utils", () => {
  it("encodes base64", () => {
    expect(base64Encode("hello")).toBe("aGVsbG8=");
  });
});
