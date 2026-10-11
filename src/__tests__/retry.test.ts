import { describe, it, expect, vi } from "vitest";
import { withRetry } from "../utils/retry";

describe("retry", () => {
  it("succeeds first try", async () => {
    const fn = vi.fn().mockResolvedValue("ok");
    const res = await withRetry(fn, 3, 10);
    expect(res).toBe("ok");
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it("retries on failure then succeeds", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("fail"))
      .mockResolvedValue("ok");
    const res = await withRetry(fn, 3, 10);
    expect(res).toBe("ok");
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it("fails after max attempts", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("fail"));
    await expect(withRetry(fn, 2, 10)).rejects.toThrow("fail");
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
