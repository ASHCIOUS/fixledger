import { describe, it, expect } from "vitest";
import { validateFileUpload } from "../server/uploads/validate";
import { MAX_FILE_SIZE_BYTES } from "../server/uploads/constants";

describe("validate file upload", () => {
  it("accepts valid file", () => {
    expect(() => validateFileUpload("image/jpeg", 1000)).not.toThrow();
  });
  it("rejects invalid type", () => {
    expect(() => validateFileUpload("application/zip", 1000)).toThrow();
  });
  it("rejects oversized file", () => {
    expect(() => validateFileUpload("image/png", MAX_FILE_SIZE_BYTES + 1)).toThrow();
  });
  it("rejects zero size", () => {
    expect(() => validateFileUpload("image/png", 0)).toThrow();
  });
});
