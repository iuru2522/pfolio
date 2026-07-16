import { describe, expect, it } from "vitest";
import {
  DEFAULT_THEME,
  getOppositeTheme,
  getThemeLabel,
  isThemeId,
  parseThemeId,
} from "@/lib/theme";

describe("theme helpers", () => {
  it("defaults to matrix-grid", () => {
    expect(DEFAULT_THEME).toBe("matrix-grid");
    expect(parseThemeId(null)).toBe("matrix-grid");
    expect(parseThemeId("nope")).toBe("matrix-grid");
  });

  it("validates theme ids", () => {
    expect(isThemeId("matrix-grid")).toBe(true);
    expect(isThemeId("night-city")).toBe(true);
    expect(isThemeId("solar")).toBe(false);
  });

  it("toggles opposite theme", () => {
    expect(getOppositeTheme("matrix-grid")).toBe("night-city");
    expect(getOppositeTheme("night-city")).toBe("matrix-grid");
  });

  it("returns labels", () => {
    expect(getThemeLabel("matrix-grid")).toBe("Matrix Grid");
    expect(getThemeLabel("night-city")).toBe("Night City");
  });
});
