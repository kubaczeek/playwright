import {BasePage} from "../base/base-page";
import {Page} from "@playwright/test";
import {routes} from "../../utils/routes";


export class CartPricingPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto(routes.cart.pricing);
    }

    async clickContinueButton() {
        await this.getContinueButton().click();
    }

    async selectRandomSubscription() {
        await this.getRandomSubscription().click();
    }

    private getContinueButton() {
        return this.page.locator('[data-test="cart-plan-continue"]');
    }

    private getRandomSubscription() {
        const subscriptionLocator = Math.floor(Math.random() * 2) === 1
            ? this.page.locator('[data-test="cart-plan-choose-14611"]')
            : this.page.locator('[data-test="cart-plan-choose-13472"]');

        return subscriptionLocator;
    }

}