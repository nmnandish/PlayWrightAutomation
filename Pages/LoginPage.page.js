
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("input#userEmail");
        this.password = page.locator("input#userPassword");
        this.loginButton = page.locator("input#login");

    }
    async LoginToApp(username, password) {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}