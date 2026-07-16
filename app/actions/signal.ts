"use server";

import { Resend } from "resend";
import { profile } from "@/content/profile";
import {
  signalSchema,
  type SignalActionResult,
  type SignalFieldErrors,
} from "@/lib/validation/signal";

function fallbackPayload(): {
  mailto: string;
  email: string;
} {
  const email = profile.email;
  const mailto = `mailto:${email}?subject=${encodeURIComponent("Signal from cyberdeck portfolio")}`;
  return { mailto, email };
}

export async function submitSignal(input: unknown): Promise<SignalActionResult> {
  const parsed = signalSchema.safeParse(input);

  if (!parsed.success) {
    const fields: SignalFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fields[key] = issue.message;
      }
    }
    return { ok: false, status: "validation_error", fields };
  }

  const data = parsed.data;

  if (data.honeypot && data.honeypot.trim().length > 0) {
    return { ok: true, status: "accepted", message: "SIGNAL ACCEPTED" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.SIGNAL_TO_EMAIL ?? profile.email;
  const fromEmail = process.env.SIGNAL_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return {
      ok: false,
      status: "delivery_failed",
      message: "UPLINK FAILED",
      fallback: fallbackPayload(),
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Signal from ${data.name}`,
      text: data.message,
    });

    if (error) {
      return {
        ok: false,
        status: "delivery_failed",
        message: "UPLINK FAILED",
        fallback: fallbackPayload(),
      };
    }

    return { ok: true, status: "delivered", message: "SIGNAL ACCEPTED" };
  } catch {
    return {
      ok: false,
      status: "delivery_failed",
      message: "UPLINK FAILED",
      fallback: fallbackPayload(),
    };
  }
}
