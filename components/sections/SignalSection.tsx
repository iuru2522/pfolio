"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/content/profile";
import { submitSignal } from "@/app/actions/signal";
import type { SignalActionResult } from "@/lib/validation/signal";
import { TerminalPanel } from "@/components/ui/TerminalPanel";
import { TerminalButton } from "@/components/ui/TerminalButton";
import { GlitchLink } from "@/components/ui/GlitchLink";

const INITIAL = { name: "", email: "", message: "", honeypot: "" };

export function SignalSection() {
  const [form, setForm] = useState(INITIAL);
  const [result, setResult] = useState<SignalActionResult | null>(null);
  const [pending, setPending] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    try {
      const next = await submitSignal(form);
      setResult(next);
      if (next.ok) {
        setForm(INITIAL);
      }
    } catch {
      setResult({
        ok: false,
        status: "delivery_failed",
        message: "UPLINK FAILED",
        fallback: {
          mailto: `mailto:${profile.email}?subject=${encodeURIComponent("Signal from cyberdeck portfolio")}`,
          email: profile.email,
        },
      });
    } finally {
      setPending(false);
    }
  };

  const status =
    result == null
      ? undefined
      : result.ok
        ? "success"
        : result.status === "validation_error"
          ? "validation"
          : "error";

  return (
    <section
      id="signal"
      data-section="signal"
      className="deck-section"
      aria-labelledby="signal-heading"
    >
      <h2 id="signal-heading" className="deck-heading">
        /SIGNAL
      </h2>

      <TerminalPanel title="TRANSMIT // CONTACT UPLINK">
        <form
          data-signal-form
          onSubmit={onSubmit}
          className="relative space-y-4"
          noValidate
        >
          <div>
            <label className="deck-label" htmlFor="signal-name">
              HANDLE
            </label>
            <input
              id="signal-name"
              name="name"
              className="deck-input"
              autoComplete="name"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
            />
            {result &&
            !result.ok &&
            result.status === "validation_error" &&
            result.fields.name ? (
              <p className="mt-1 text-xs text-[var(--deck-warn)]">{result.fields.name}</p>
            ) : null}
          </div>

          <div>
            <label className="deck-label" htmlFor="signal-email">
              REPLY ADDRESS
            </label>
            <input
              id="signal-email"
              name="email"
              type="email"
              className="deck-input"
              autoComplete="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
            />
            {result &&
            !result.ok &&
            result.status === "validation_error" &&
            result.fields.email ? (
              <p className="mt-1 text-xs text-[var(--deck-warn)]">{result.fields.email}</p>
            ) : null}
          </div>

          <div>
            <label className="deck-label" htmlFor="signal-message">
              PAYLOAD
            </label>
            <textarea
              id="signal-message"
              name="message"
              className="deck-input min-h-32"
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
            />
            {result &&
            !result.ok &&
            result.status === "validation_error" &&
            result.fields.message ? (
              <p className="mt-1 text-xs text-[var(--deck-warn)]">{result.fields.message}</p>
            ) : null}
          </div>

          <div
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="signal-company">Company</label>
            <input
              id="signal-company"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={form.honeypot}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  honeypot: event.target.value,
                }))
              }
            />
          </div>

          <TerminalButton type="submit" disabled={pending}>
            {pending ? "TRANSMITTING..." : "SEND SIGNAL"}
          </TerminalButton>
        </form>

        {status ? (
          <div
            className="mt-4 border border-[var(--deck-border)] p-3 text-sm"
            data-signal-status={status}
            role="status"
          >
            {result?.ok ? (
              <p>{result.message}</p>
            ) : result && !result.ok && result.status === "delivery_failed" ? (
              <div className="space-y-2">
                <p className="text-[var(--deck-warn)]">{result.message}</p>
                <p>
                  FALLBACK:{" "}
                  <GlitchLink href={result.fallback.mailto}>
                    {result.fallback.email}
                  </GlitchLink>
                </p>
              </div>
            ) : (
              <p className="text-[var(--deck-warn)]">VALIDATION FAILED // CHECK FIELDS</p>
            )}
          </div>
        ) : (
          <p className="mt-4 text-xs text-[var(--deck-accent)]">
            DIRECT CHANNEL: {profile.email}
          </p>
        )}
      </TerminalPanel>
    </section>
  );
}
