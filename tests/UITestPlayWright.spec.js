import { test, expect } from '../Fixtures/App.Fixtures.js';


test('LoginTestUI', async ({ HomePage, LoginPage }) => {
    await LoginPage.LoginToApp("Kohli18@gmail.com", "Welcome@123");
    const lab = await HomePage.DoValidateTheHome();
    await expect(lab.label).toEqual("Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot");
    await expect(lab.label).toContain("Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot");
    await expect(lab.label).toBe("Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot");
    await expect(lab.label).toContain("Book Your Spot");
    console.log(lab.signOut);
    await expect(lab.signOut).toBeTruthy();
});






