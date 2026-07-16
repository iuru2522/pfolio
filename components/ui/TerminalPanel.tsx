import type { ReactNode } from "react";

type TerminalPanelProps = {
  children: ReactNode;
  className?: string;
  pulse?: boolean;
  title?: string;
};

export function TerminalPanel({
  children,
  className = "",
  pulse = true,
  title,
}: TerminalPanelProps) {
  return (
    <section
      className={`deck-panel ${pulse ? "deck-panel-pulse" : ""} ${className}`}
    >
      {title ? (
        <header className="border-b border-[var(--deck-border)] px-3 py-2 text-xs tracking-[0.14em] text-[var(--deck-accent)] uppercase">
          {title}
        </header>
      ) : null}
      <div className="p-3 sm:p-4">{children}</div>
    </section>
  );
}
