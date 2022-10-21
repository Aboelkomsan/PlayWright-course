//const { test, expect } = require('@playwright/test');

//test.describe.parallel("Smoke Tests", () => {

   // test.beforeEach(async ({ page }) => {
     //   await page.goto("/");
   // })

  //  test.afterEach(async ({ page }) => {
     //   console.log("this test finished");
  //  })


    //test("First test @test-regression", async ({ page }) => {
        // write testing code here 
        //await page.goto("https://playwright.dev/");
        //const title = page.locator('.navbar__inner .navbar__title');
        //await expect(title).toHaveText('Playwright');
    //})

    //test("simple click test @regression-smoke", async ({ page, browserName }) => {
      //  test.skip(browserName === 'firefox', 'working on the firefox fix');
      //  await page.locator("text=Add/Remove Elements").click();
     //   await page.locator("text=Add element").click();
   // })

   // test("Duplicate test @smoke", async ({ page }) => {
     //   await page.click("text=Add/Remove Elements");
      //  await page.click("text=Add elemens");
   // })

   // test("Duplicate test 1 @regression", async ({ page }) => {
     //   await page.goto("/");
      //  await page.click("text=Add/Remove Elements");
      //  await page.click("text=Add element");
  //  })
//})




const {test,expect}= require('@playwright/test');


test.describe("Examples",()=> {
    test("Testing Selectors",async({page})=>{
        await page.goto("https://demoqa.com/text-box");
        await expect(page).toHaveTitle('ToolsQA');
        await expect(page).toHaveURL('https://demoqa.com/text-box');
        await page.pause();
        await page.locator('#userName').type("Test Username");
        await page.locator('[placeholder="name@example.com"]').type("test@gmail.com");
        await page.locator('[placeholder="Current Address"]').type("current address test");
        await page.locator('#permanentAddress').type("test");
        await page.locator('button:has-text("submit")').click();
        await page.pause();


        const name =page.locator('#name');
        const email =page.locator('#email');
        const currentAddress =page.locator('p#currentAddress');
        const permanentAddress =page.locator('p#permanentAddress');

        await expect(name).toBeVisible();
        await expect(name).toHaveText('Name:Test Username'); 
        await expect(email).toBeVisible();
        await expect(email).toHaveText('Email:test@gmail.com');   
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText('Current Address :current address test');   
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText('Permananet Address :test');       



    })
})




