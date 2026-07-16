import { z } from "zod";

export const signalSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "HANDLE REQUIRED")
    .max(80, "HANDLE TOO LONG"),
  email: z.string().trim().email("INVALID ADDRESS"),
  message: z
    .string()
    .trim()
    .min(10, "MESSAGE TOO SHORT")
    .max(2000, "MESSAGE TOO LONG"),
  honeypot: z.string().optional().default(""),
});

export type SignalInput = z.infer<typeof signalSchema>;

export type SignalFieldErrors = Partial<
  Record<"name" | "email" | "message", string>
>;

export type SignalActionResult =
  | { ok: true; status: "delivered" | "accepted"; message: string }
  | {
      ok: false;
      status: "validation_error";
      fields: SignalFieldErrors;
    }
  | {
      ok: false;
      status: "delivery_failed";
      message: string;
      fallback: { mailto: string; email: string };
    };