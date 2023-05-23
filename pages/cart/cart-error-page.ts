import {BasePage} from "../base/base-page";
import {Page} from "@playwright/test";
import {routes} from "../../utils/routes";


export class CartErrorPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto(routes.cart.paymentDetails);
    }
}