import { describe, it, expect } from "vitest";
import { AuthorizationError, NotFoundError } from "../server/errors";

describe("errors", () => {
  it("creates auth error", () => {
    const err = new AuthorizationError();
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe("AuthorizationError");
  });
  it("creates not found error", () => {
    const err = new NotFoundError();
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe("NotFoundError");
  });
});
