"use client";

import { useState } from "react";
import { GlitchLink } from "@/components/ui/GlitchLink";
import { DeckOverride } from "@/components/deck/DeckOverride";

const NAV_ITEMS = [
  { href: "#connect", label: "/CONNECT" },
  { href: "#archives", label: "/ARCHIVES" },
  { href: "#protocols", label: "/PROTOCOLS" },
  { href: "#signal", label: "/SIGNAL" },
] as const;

export function DeckNav() {
  const [open, setOpen] = useState(false);

  const onNavigate = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--deck-border)] bg-[color-mix(in_srgb,var(--deck-bg)_92%,transparent)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-3 py-3 sm:px-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs tracking-[0.16em] text-[var(--deck-accent)] uppercase">
            CYBERDECK // PORTFOLIO OS
          </p>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <DeckOverride />
            </div>
            <button
              type="button"
              className="deck-btn sm:hidden"
              aria-expanded={open}
              aria-controls="deck-nav-paths"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>

        <nav
          id="deck-nav-paths"
          aria-label="Deck directories"
          className={`${open ? "flex" : "hidden"} flex-col gap-2 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-between`}
        >
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <GlitchLink
                  href={item.href}
                  onClick={onNavigate}
                  className="text-sm tracking-[0.12em]"
                >
                  {item.label}
                </GlitchLink>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            <DeckOverride />
          </div>
        </nav>
      </div>
    </header>
  );
}
