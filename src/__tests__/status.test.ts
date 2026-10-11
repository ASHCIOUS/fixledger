import { describe, it, expect } from "vitest";
import { isValidRequestStatus } from "../server/requests/status";

describe("request status", () => {
  it("validates known statuses", () => {
    expect(isValidRequestStatus("NEW")).toBe(true);
    expect(isValidRequestStatus("COMPLETED")).toBe(true);
    expect(isValidRequestStatus("CLOSED")).toBe(true);
  });
  it("rejects unknown statuses", () => {
    expect(isValidRequestStatus("INVALID")).toBe(false);
    expect(isValidRequestStatus("new")).toBe(false);
  });
});
