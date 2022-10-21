const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  // Go to https://demoqa.com/
  await page.goto('https://demoqa.com/');
  // Click svg >> nth=0
  await page.locator('svg').first().click();
  await expect(page).toHaveURL('https://demoqa.com/elements');
  // Click text=Text Box
  await page.locator('text=Text Box').click();
  await expect(page).toHaveURL('https://demoqa.com/text-box');
  // Click [placeholder="Full Name"]
  await page.locator('[placeholder="Full Name"]').click();
  // Fill [placeholder="Full Name"]
  await page.locator('[placeholder="Full Name"]').fill('test');
  // Click [placeholder="name\@example\.com"]
  await page.locator('[placeholder="name\\@example\\.com"]').click();
  // Fill [placeholder="name\@example\.com"]
  await page.locator('[placeholder="name\\@example\\.com"]').fill('test@gmail.com');
  // Click #currentAddress
  await page.locator('#currentAddress').click();
  // Fill #currentAddress
  await page.locator('#currentAddress').fill('test');
  // Click #permanentAddress
  await page.locator('#permanentAddress').click();
  // Fill #permanentAddress
  await page.locator('#permanentAddress').fill('test');
  // Click text=Submit
  await page.locator('text=Submit').click();
});