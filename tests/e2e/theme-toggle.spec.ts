import { expect, test } from "@playwright/test";

test("persists deck override theme across reload", async ({ page }) => {
  await page.goto("/");
  const toggle = page.locator("[data-theme-toggle]:visible");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "matrix-grid");
  await toggle.click();
  await expect(toggle).toHaveAttribute("data-theme-current", "night-city");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "night-city");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "night-city");
});
