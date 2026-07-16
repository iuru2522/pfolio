"use client";

import { useEffect, useState } from "react";
import { consoleLogs } from "@/content/console-logs";
import { usePrefersReducedMotion } from "@/lib/motion";
import { TerminalButton } from "@/components/ui/TerminalButton";

export function ConsoleLogger() {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (reducedMotion || consoleLogs.length === 0) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % consoleLogs.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const line = consoleLogs[index] ?? consoleLogs[0];

  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-[var(--deck-border)] bg-[color-mix(in_srgb,var(--deck-bg)_94%,transparent)]">
      <div className="mx-auto flex max-w-6xl items-start gap-3 px-3 py-2 sm:px-4">
        <TerminalButton
          className="sm:hidden"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "HIDE LOG" : "SYS LOG"}
        </TerminalButton>

        <div
          className={`${expanded ? "block" : "hidden"} min-w-0 flex-1 font-mono text-xs tracking-[0.04em] sm:block`}
          aria-live="off"
          data-console-logger
        >
          <p className="truncate text-[var(--deck-accent)]">
            <span className="mr-2 text-[var(--deck-amber)]">
              [{(line?.level ?? "sys").toUpperCase()}]
            </span>
            {line?.text}
          </p>
        </div>
      </div>
    </div>
  );
}
