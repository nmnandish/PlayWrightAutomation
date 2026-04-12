const {test, expect} = require('@playwright/test')

test('MyNewTest', async ({ page }) => {
    await page.goto('https://www.amazon.com/');
   // await page.getByRole('link', { name: 'Get started' }).click();
    // await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
    // console.log(await page.title());
    await page.locator('input#twotabsearchtextbox').fill('s26 ultra');
    await page.locator('#nav-search-submit-button').click();
});

test.only('ENdtoENdTest', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("input#userEmail").fill('Kohli18@gmail.com');
    await page.locator("input#userPassword").fill('Welcome@123');
    await page.locator("[value='Login']").click();

    // const header = await page.locator(".mt-1 h3").textContent().toEqual("Automation") ;

    expect(await page.locator(".mt-1 h3").textContent()).toEqual("Automation");
    // await expect(header).toEqual("Automation");
    // console.log(header);

}); 