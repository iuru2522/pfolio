import { expect, test } from "@playwright/test";

test("filters archives by directory", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "/ARCHIVES" }).click();

  const section = page.locator('[data-section="archives"]');
  await expect(section).toBeVisible();

  const webApps = section.getByRole("button", { name: "cd /web-apps" });
  await webApps.click();
  await expect(webApps).toHaveAttribute("aria-pressed", "true");

  const visible = section.locator("[data-archive-id]");
    const webAppCount = await visible.count();
    expect(webAppCount).toBeGreaterThan(0);
    for (let i = 0; i < webAppCount; i++) {
      await expect(visible.nth(i)).toContainText("/web-apps");
    }

    await section.getByRole("button", { name: "cd /", exact: true }).click();
    await expect(section.locator("[data-archive-id]")).toHaveCount(11);
    await expect(section.getByText("ACME DASHBOARD")).toBeVisible();
    await expect(section.getByText("TBD").first()).toBeVisible();
  });
