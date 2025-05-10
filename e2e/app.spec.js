// @ts-check
const { test, expect } = require('@playwright/test');

test.describe(() => {
  test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Learn Jenkins/);
  });

  test('has Jenkins in the body', async ({ page }) => {
    await page.goto('/');
    const isVisible = await page.locator('a:has-text("Learn Jenkins on Udemy")').isVisible();
    expect(isVisible).toBeTruthy();
  });

  test('has expected app version', async ({ page }) => {
    await page.goto('/');
    const expectedAppVersion = process.env.REACT_APP_VERSION || '1';
    const isVisible = await page.locator(`p:has-text("Application version: ${expectedAppVersion}")`).isVisible();
    expect(isVisible).toBeTruthy();
  });
});

// 🔥 Separate suite for prod run with --grep "prod"
test.describe('prod', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://unrivaled-melba-e685e7.netlify.app');
    await expect(page).toHaveTitle(/Learn Jenkins/);
  });

  test('has Jenkins in the body', async ({ page }) => {
    await page.goto('https://unrivaled-melba-e685e7.netlify.app');
    const isVisible = await page.locator('a:has-text("Learn Jenkins on Udemy")').isVisible();
    expect(isVisible).toBeTruthy();
  });

  test('has expected app version', async ({ page }) => {
    await page.goto('https://unrivaled-melba-e685e7.netlify.app');
    const expectedAppVersion = process.env.REACT_APP_VERSION || '1';
    const isVisible = await page.locator(`p:has-text("Application version: ${expectedAppVersion}")`).isVisible();
    expect(isVisible).toBeTruthy();
  });
});