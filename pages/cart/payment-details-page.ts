import {BasePage} from "../base/base-page";
import {FrameLocator, Page} from "@playwright/test";
import {routes} from "../../utils/routes";
import {testData} from "../../utils/testData";


export class PaymentDetailsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto(routes.cart.paymentDetails);
    }

    async fillCardInfo(cardData = testData.creditCardVincent) {
        const iframe = await this.getPaymentIframe();
        await this.getCardNumberInput(iframe).type(cardData.number);
        await this.getCVVInput(iframe).type(cardData.cvv);
        await this.getExpirationDateInput().type(cardData.expiryDate);
        await this.getCardHolderNameInput().clear();
        await this.getCardHolderNameInput().type(cardData.holder);
    }

    async clickSubmitButton() {
        await this.getSubmitButton().click({delay: 500});
    }

    private getCardNumberInput(iframe: FrameLocator) {
        return iframe.locator('#ccNum');
    }

    private getCVVInput(iframe: FrameLocator) {
        return iframe.locator('#ccCVV');
    }

    private getExpirationDateInput() {
        return this.page.locator('input[name=expirationDate]');
    }

    private getCardHolderNameInput() {
        return this.page.locator('input[name=cardholderName]');
    }

    private getSubmitButton() {
        return this.page.locator('[data-test="cart-pay-securely"]');
    }

    private getPaymentIframe() {
        return this.page.frameLocator('#ccframe')
    }
}