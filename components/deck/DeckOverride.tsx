"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  applyThemeToDocument,
  DEFAULT_THEME,
  getOppositeTheme,
  getThemeLabel,
  readStoredTheme,
  writeStoredTheme,
  type ThemeId,
} from "@/lib/theme";
import { TerminalButton } from "@/components/ui/TerminalButton";

const listeners = new Set<() => void>();

function emitThemeChange() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === "deck.theme") listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): ThemeId {
  return readStoredTheme();
}

function getServerSnapshot(): ThemeId {
  return DEFAULT_THEME;
}

export function DeckOverride() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = getOppositeTheme(theme);
    writeStoredTheme(next);
    applyThemeToDocument(next);
    emitThemeChange();
  }, [theme]);

  return (
    <TerminalButton
      onClick={toggle}
      aria-label={`Deck Override: ${getThemeLabel(theme)}. Activate to switch theme.`}
      data-theme-toggle
      data-theme-current={theme}
    >
      DECK OVERRIDE [{getThemeLabel(theme).toUpperCase()}]
    </TerminalButton>
  );
}
