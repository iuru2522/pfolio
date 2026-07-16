import { expect, test } from "@playwright/test";

test("navigates to each deck section", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('[data-section="connect"]')).toBeVisible();

  for (const section of ["archives", "protocols", "signal"] as const) {
    await page.getByRole("link", { name: `/${section.toUpperCase()}` }).click();
    await expect(page.locator(`[data-section="${section}"]`)).toBeInViewport();
  }
});
