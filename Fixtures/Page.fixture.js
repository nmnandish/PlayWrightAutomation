import { test as base } from '@playwright/test';
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


//With Out Extend
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