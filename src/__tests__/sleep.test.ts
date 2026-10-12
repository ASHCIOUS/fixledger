import { describe, it, expect } from "vitest";
import { sleep } from "../utils/sleep";

describe("sleep", () => {
  it("sleeps", async () => {
    const t = Date.now();
    await sleep(5);
    expect(Date.now() - t).toBeGreaterThanOrEqual(5);
  });
});
