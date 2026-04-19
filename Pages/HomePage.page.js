export class HomePage {
    constructor(page) {
        this.page = page;
        //Locators
        this.cartButton = page.locator("button[routerlink*='cart']");
        this.label1 = page.getByText('Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire');
        this.signOutButton = page.locator("i.fa-sign-out");
        this.itemTitle = page.locator(".card-body b");
        this.addToCartButton = page.locator(".card-body button:last-child");

    }
    async DoValidateTheHome() {
        let res = {};
        res.label = await this.label1.textContent()
        res.signOut = await this.signOutButton.isVisible();
        return res;
    }

    async AddItemToCart(itemName) {
        
        const titles = await this.itemTitle.allTextContents();
        await console.log(titles.length);
        const totalItems = titles.length;
        for (let i = 0; i < totalItems; i++) {
            if (titles[i].includes(itemName)) {
                await this.addToCartButton.nth(i).click();
                break;
            }
            console.log(titles[i]);
        }
    }
}