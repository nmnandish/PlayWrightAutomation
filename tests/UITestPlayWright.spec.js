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

test('Login Test Via API', async ({ LoginViaAPI }) => {
console.log(LoginViaAPI.message);
});

