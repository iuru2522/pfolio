import { expect, test } from "@playwright/test";

test("validates and falls back on signal submit without mail env", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "/SIGNAL" }).click();

  const form = page.locator("[data-signal-form]");
  await expect(form).toBeVisible();

  await form.getByRole("button", { name: "SEND SIGNAL" }).click();
  await expect(page.locator('[data-signal-status="validation"]')).toBeVisible({
    timeout: 15_000,
  });

  await form.locator("#signal-name").fill("Armitage");
  await form.locator("#signal-email").fill("armitage@example.com");
  await form.locator("#signal-message").fill("Need a console cowboy for a short run.");
  await form.getByRole("button", { name: "SEND SIGNAL" }).click();

  await expect(page.locator('[data-signal-status="error"]')).toBeVisible({
    timeout: 15_000,
  });
  await expect(page.getByText("UPLINK FAILED")).toBeVisible();
});
