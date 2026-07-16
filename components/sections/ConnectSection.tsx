"use client";

import { useEffect, useMemo, useState } from "react";
import { profile } from "@/content/profile";
import { usePrefersReducedMotion } from "@/lib/motion";
import { TerminalPanel } from "@/components/ui/TerminalPanel";
import { GlitchLink } from "@/components/ui/GlitchLink";

const BOOT_LINES = [
  "> INIT CYBERDECK BIOS...",
  "> LOADING NEURAL INTERFACE...",
  "> CHECKING ICE COUNTERS...",
  `> CASE PROFILE: ${profile.roleLine}`,
  `> HANDLE: ${profile.handle}`,
  profile.locationLabel ? `> LOC: ${profile.locationLabel}` : null,
  profile.statusLine ? `> STATUS: ${profile.statusLine}` : null,
  "> READY FOR OPERATOR INPUT_",
].filter(Boolean) as string[];

export function ConnectSection() {
  const reducedMotion = usePrefersReducedMotion();
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setAnimatedCount(index);
      if (index >= BOOT_LINES.length) {
        window.clearInterval(timer);
      }
    }, 320);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const visibleCount = reducedMotion ? BOOT_LINES.length : animatedCount;

  const lines = useMemo(
    () => BOOT_LINES.slice(0, visibleCount),
    [visibleCount],
  );

  const bootComplete = visibleCount >= BOOT_LINES.length;

  return (
    <section
      id="connect"
      data-section="connect"
      className="deck-section"
      aria-labelledby="connect-heading"
    >
      <h2 id="connect-heading" className="deck-heading">
        /CONNECT
      </h2>
      <TerminalPanel title="DECK DIAGNOSTIC // BOOT SEQUENCE">
        <div className="space-y-2 font-mono text-sm leading-relaxed sm:text-base">
          {lines.map((line) => (
            <p
              key={line}
              className={
                bootComplete && line.endsWith("_") ? "boot-cursor" : undefined
              }
            >
              {line.replace(/_$/, "")}
            </p>
          ))}
          {!bootComplete ? (
            <p className="boot-cursor text-[var(--deck-accent)]" />
          ) : null}
        </div>

        {bootComplete ? (
          <div className="mt-6 space-y-3 border-t border-[var(--deck-border)] pt-4 text-sm">
            <p className="tracking-[0.08em] text-[var(--deck-accent)]">
              OPERATOR IDENTIFIED // NODE ONLINE
            </p>
            {profile.socialLinks?.length ? (
              <ul className="flex flex-wrap gap-4">
                {profile.socialLinks.map((link) => (
                  <li key={link.url}>
                    <GlitchLink href={link.url} target="_blank" rel="noreferrer">
                      [{link.label}]
                    </GlitchLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </TerminalPanel>
    </section>
  );
}
