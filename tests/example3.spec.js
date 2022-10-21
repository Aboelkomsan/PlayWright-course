const { test, expect } = require('@playwright/test');


test.describe.parallel("Example Tests", () => {

    test("Example 1", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        await page.locator('input[type="checkbox"]').first().check();
        await page.locator('input[type="checkbox"]').last().uncheck();
        await page.pause();
    })

    test("Example 2", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await page.dragAndDrop('#column-a', '#column-b');
        await page.dragAndDrop('#column-b', '#column-a');
        await page.pause();
    })


    test("Example 3", async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await page.locator('#dropdown').selectOption({ label: 'Option 1' });
        await expect(page.locator('#dropdown')).toHaveValue('1');
        await page.locator('#dropdown').selectOption({ label: 'Option 2' });
        await expect(page.locator('#dropdown')).toHaveValue('2');
        await page.pause();


    })


    test("iFrame test", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/iframe');
        const frametest = page.frameLocator('#mce_0_ifr').locator('html');
        await frametest.click();
        await frametest.type('This is just a test typing in iframe');


    })

    test("Download Example", async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/download');
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('text=dummyImage.jpeg').click(),
        ]);

        const path = await download.path();
        const url = download.url();
        console.log(path);
        console.log(url);

    })

    test("UPload Example", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload');
        await page.setInputFiles('#file-upload', 'UplodedFIles/Sample.pdf');
        await page.locator('input:has-text("Upload")').click();
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
        await expect(page.locator('text=Sample.pdf')).toBeVisible();


    })

    test("UPload Example 2 ", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload');
        const [fileChooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            page.locator('#file-upload').click(),
        ]);
        await fileChooser.setFiles('UplodedFIles/Sample.pdf');
        await page.locator('input:has-text("Upload")').click();
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
        await expect(page.locator('text=Sample.pdf')).toBeVisible();


    })

    test("Hover Example",async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/hovers');
        await page.hover('[alt="User Avatar"]');
        await expect(page.locator('text=name: user1')).toBeVisible();
        await page.locator('text= View profile ').first().click();
        await expect(page.locator('text=Not Found')).toBeVisible();
        
    })


    test.only("Press Example",async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/key_presses');
        await page.press('#target','F1');
        await page.press('#target','Delete');

    })


})


