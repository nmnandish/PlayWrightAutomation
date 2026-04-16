export class HomePage {
    constructor(page) {
        this.page = page;
        //Locators
        this.cartButton = page.locator("button[routerlink*='cart']");
        this.label1 = page.getByText('Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot');
        this.signOutButton = page.locator("i.fa-sign-out");
    }
    async DoValidateTheHome() {
        let res = {};
        res.label = await this.label1.textContent()
        res.signOut = await this.signOutButton.isVisible();
        return res;
    }
}