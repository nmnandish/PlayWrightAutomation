import { test, expect } from '../Fixtures/App.Fixtures.js';


test('Login to UAT and validate the home page', async ({ HomePage, LoginPage }) => {
    await LoginPage.LoginToApp("Kohli18@gmail.com", "Welcome@123");
    const lab = await HomePage.DoValidateTheHome();
    await expect(lab.label).toEqual("Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot");
    await expect(lab.label).toContain("Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot");
    await expect(lab.label).toBe("Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot");
    await expect(lab.label).toContain("Book Your Spot");
    console.log(lab.signOut);
    await expect(lab.signOut).toBeTruthy();
});

test('Test Adding Item to Cart', async ({ HomePage, LoginPage }) => {
    await LoginPage.LoginToApp("Kohli18@gmail.com", "Welcome@123");
    const lab = await HomePage.DoValidateTheHome();
    await expect(lab.label).toContain("Book Your Spot");
    await HomePage.AddItemToCart("ZARA COAT 3");
    console.log("Item Added to Cart");
});

// This test is to validate the API login and response via Fixture.
test('Login Test Via API', async ({ LoginViaAPI }) => {
    console.log(LoginViaAPI.message);
});

//
test('Login via API from APIUtils', async ({ page, APILOGIN, HomePage }) => {
    await console.log(APILOGIN.message);

    // Set the token in local storage before navigating to the page
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, APILOGIN.token);
    // Now navigate to the page, and it should recognize the user as logged in.

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //Locating the elements like below is not efficient, we can create the member functions or variables in the HomePage POM.
    await page.locator(".logo-holder").isVisible();
    await page.locator(".logo-holder").click();
})
