export const Login = async ({ page, use }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("input#userEmail").fill('john.doe@example.com');
    await page.locator("input#userPassword").fill('Password123');
    await page.locator("button[type='submit']").click();
    await use(page);
}