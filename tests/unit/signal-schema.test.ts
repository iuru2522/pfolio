import { describe, expect, it } from "vitest";
import { signalSchema } from "@/lib/validation/signal";

describe("signal schema", () => {
  it("accepts valid payloads", () => {
    const result = signalSchema.safeParse({
      name: "Molly",
      email: "molly@example.com",
      message: "Need a deck runner for Chiba ops.",
      honeypot: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short messages and bad email", () => {
    const result = signalSchema.safeParse({
      name: "",
      email: "not-an-email",
      message: "short",
    });
    expect(result.success).toBe(false);
  });
});
