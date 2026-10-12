import { describe, it, expect } from "vitest";
import { slugify } from "../utils/slugify";

describe("slugify", () => {
  it("creates slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
    expect(slugify("Fix Ledger!")).toBe("fix-ledger");
  });
});
