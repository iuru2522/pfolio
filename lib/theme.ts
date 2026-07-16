export const THEME_STORAGE_KEY = "deck.theme";

export type ThemeId = "matrix-grid" | "night-city";

export type DeckTheme = {
  id: ThemeId;
  label: string;
};

export const DECK_THEMES: readonly DeckTheme[] = [
  { id: "matrix-grid", label: "Matrix Grid" },
  { id: "night-city", label: "Night City" },
] as const;

export const DEFAULT_THEME: ThemeId = "matrix-grid";

export function isThemeId(value: unknown): value is ThemeId {
  return value === "matrix-grid" || value === "night-city";
}

export function parseThemeId(value: string | null | undefined): ThemeId {
  return isThemeId(value) ? value : DEFAULT_THEME;
}

export function getOppositeTheme(id: ThemeId): ThemeId {
  return id === "matrix-grid" ? "night-city" : "matrix-grid";
}

export function getThemeLabel(id: ThemeId): string {
  return DECK_THEMES.find((theme) => theme.id === id)?.label ?? id;
}

export function readStoredTheme(): ThemeId {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    return parseThemeId(window.localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return DEFAULT_THEME;
  }
}

export function writeStoredTheme(id: ThemeId): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    // Ignore quota / private mode failures
  }
}

export function applyThemeToDocument(id: ThemeId): void {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", id);
}

/** Inline script for FOUC-safe theme bootstrap in root layout */
export function themeBootstrapScript(): string {
  return `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);if(t!=="matrix-grid"&&t!=="night-city"){t=${JSON.stringify(DEFAULT_THEME)};}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme",${JSON.stringify(DEFAULT_THEME)});} })();`;
}
