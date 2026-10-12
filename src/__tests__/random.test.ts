import { describe, it, expect } from "vitest";
import { randomString } from "../utils/random";

describe("random utils", () => {
  it("generates random string", () => {
    const s = randomString(10);
    expect(s.length).toBe(10);
    expect(/^[a-z0-9]+$/.test(s)).toBe(true);
  });
});
