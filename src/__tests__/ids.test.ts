import { describe, it, expect } from "vitest";
import { parseId } from "../utils/ids";

describe("ids", () => {
  it("parses valid id", () => {
    expect(parseId("1")).toBe(1);
  });
});
