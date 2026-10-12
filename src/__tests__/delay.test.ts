import { describe, it, expect } from "vitest";
import { delay } from "../utils/delay";

describe("delay", () => {
  it("resolves after delay", async () => {
    const start = Date.now();
    await delay(10);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(10);
  });
});
