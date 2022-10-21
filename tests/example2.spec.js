const { test, expect } = require('@playwright/test');


test.describe("Authentication", () => {
    test.use({
        storageState: "automationUser.json",
    })

    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com');
    })

    test("Saving Authentication", async ({ page }) => {
        
        //await page.locator('text=Log Out').click();
        // Click input[name="username"]
        await page.locator('input[name="username"]').click();
        // Fill input[name="username"]
        await page.locator('input[name="username"]').fill('automationdemo');
        // Click input[name="password"]
        await page.locator('input[name="password"]').click();
        // Fill input[name="password"]
        await page.locator('input[name="password"]').fill('admin');
        // Click text=Log 
        await page.locator('text=Log In').click();


        await page.context().storageState({ path: 'automationUser.json' });

    })

    test("Test 2", async ({ page }) => {

        await page.locator('a:has-text("Transfer Funds")').first().click();

    })

    test("Test 3", async ({ page }) => {

        await page.locator('text=Bill Pay').first().click();

    })


})