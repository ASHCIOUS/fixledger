import { describe, it, expect } from "vitest";
import { jsonStringify } from "../utils/json";

describe("json utils", () => {
  it("stringifies json", () => {
    expect(jsonStringify({ a: 1 })).toBe('{"a":1}');
  });
});
