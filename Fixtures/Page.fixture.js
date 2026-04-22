import { HomePage } from "../Pages/HomePage.page";
import { LoginPage } from "../Pages/LoginPage.page";

// export const test = base.extend({
//     HomePage: async ({ page }, use) => {
//         const homePage = new HomePage(page);
//         await use(homePage);
//     },
//     LoginPage: async ({ page }, use) => {
//         const loginPage = new LoginPage(page);
//         await use(loginPage);
//     }
// });

//WithOut Extend test, just declare the page fixture and export it.
export const pageFixture = {
    HomePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    LoginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
};