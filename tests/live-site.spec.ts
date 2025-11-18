import { test, expect } from '@playwright/test';

const SITE_URL = 'https://bealer-blueprint-nextjs.vercel.app';
const USERNAME = 'derrick';
const PASSWORD = 'allstate2026';

test.describe('Live Site Tests', () => {

  test('should redirect unauthenticated users to login', async ({ page }) => {
    await page.goto(SITE_URL);
    await expect(page).toHaveURL(/\/login/);
    await expect(page.locator('h1')).toContainText('Agency Growth System');
  });

  test('should allow login with correct credentials', async ({ page }) => {
    await page.goto(`${SITE_URL}/login`);

    // Fill in credentials
    await page.fill('input[type="text"]', USERNAME);
    await page.fill('input[type="password"]', PASSWORD);

    // Click sign in button
    await page.click('button[type="submit"]');

    // Should redirect to home page
    await expect(page).toHaveURL(SITE_URL + '/');

    // Check for main content
    await expect(page.locator('h1')).toContainText('Agency Growth & Retention System');
  });

  test('should navigate to timeline page', async ({ page }) => {
    // Login first
    await page.goto(`${SITE_URL}/login`);
    await page.fill('input[type="text"]', USERNAME);
    await page.fill('input[type="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(SITE_URL + '/');

    // Navigate to timeline
    await page.click('text=View Timeline');
    await expect(page).toHaveURL(`${SITE_URL}/timeline`);
    await expect(page.locator('h1')).toContainText('Implementation Timeline');
  });

  test('should navigate to data requirements page', async ({ page }) => {
    // Login first
    await page.goto(`${SITE_URL}/login`);
    await page.fill('input[type="text"]', USERNAME);
    await page.fill('input[type="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(SITE_URL + '/');

    // Navigate to data requirements
    await page.click('text=Data Requirements');
    await expect(page).toHaveURL(`${SITE_URL}/data-requirements`);
    await expect(page.locator('h1')).toContainText('Data Requirements Checklist');
  });

  test('should toggle checklist items', async ({ page }) => {
    // Login first
    await page.goto(`${SITE_URL}/login`);
    await page.fill('input[type="text"]', USERNAME);
    await page.fill('input[type="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(SITE_URL + '/');

    // Go to data requirements
    await page.click('text=Data Requirements');
    await page.waitForURL(`${SITE_URL}/data-requirements`);

    // Find and click a checklist item
    const firstCheckbox = page.locator('input[type="checkbox"]').first();
    const isChecked = await firstCheckbox.isChecked();

    // Toggle it
    await firstCheckbox.click();

    // Verify it toggled
    await expect(firstCheckbox).toBeChecked({ checked: !isChecked });
  });

  test('should navigate back from timeline to overview', async ({ page }) => {
    // Login and go to timeline
    await page.goto(`${SITE_URL}/login`);
    await page.fill('input[type="text"]', USERNAME);
    await page.fill('input[type="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(SITE_URL + '/');
    await page.click('text=View Timeline');
    await page.waitForURL(`${SITE_URL}/timeline`);

    // Click back to overview
    await page.click('text=Back to Overview');
    await expect(page).toHaveURL(SITE_URL + '/');
  });

  test('should show all main sections on overview page', async ({ page }) => {
    // Login
    await page.goto(`${SITE_URL}/login`);
    await page.fill('input[type="text"]', USERNAME);
    await page.fill('input[type="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(SITE_URL + '/');

    // Check for main sections
    await expect(page.locator('text=Executive Summary')).toBeVisible();
    await expect(page.locator('text=Strategic AI Projects')).toBeVisible();
    await expect(page.locator('text=Benefits')).toBeVisible();
    await expect(page.locator('text=Next Steps')).toBeVisible();
  });

  test('should reject invalid login credentials', async ({ page }) => {
    await page.goto(`${SITE_URL}/login`);

    // Try invalid credentials
    await page.fill('input[type="text"]', 'wronguser');
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Should show error message
    await expect(page.locator('text=Invalid username or password')).toBeVisible();

    // Should still be on login page
    await expect(page).toHaveURL(/\/login/);
  });

  test('should persist checklist state in localStorage', async ({ page }) => {
    // Login
    await page.goto(`${SITE_URL}/login`);
    await page.fill('input[type="text"]', USERNAME);
    await page.fill('input[type="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(SITE_URL + '/');

    // Go to data requirements
    await page.click('text=Data Requirements');
    await page.waitForURL(`${SITE_URL}/data-requirements`);

    // Toggle first checkbox
    const firstCheckbox = page.locator('input[type="checkbox"]').first();
    await firstCheckbox.click();
    const isChecked = await firstCheckbox.isChecked();

    // Reload page
    await page.reload();

    // Check if state persisted
    await expect(firstCheckbox).toBeChecked({ checked: isChecked });
  });
});
