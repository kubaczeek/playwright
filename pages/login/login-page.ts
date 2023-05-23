import {Page} from "@playwright/test";
import {testData} from "../../utils/testData";
import {routes} from "../../utils/routes";
import {BasePage} from "../base/base-page";


export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async goto() {
        await this.page.goto(routes.login);
    }

    async validLogin(email: string = testData.validCredentials.email, password: string = testData.validCredentials.password) {
        await this.getEmailInput().type(email)
        await this.getPasswordInput().type(password)
        await this.acceptCookies();
        await this.getSubmitButton().click()
    }

    private getEmailInput() {
        return this.page.locator('[data-test="auth-login-email"]')
    }

    private getPasswordInput() {
        return this.page.locator('[data-test="auth-login-password"]')
    }

    private getSubmitButton() {
        return this.page.locator('[data-test="auth-login-submit"]')
    }

    private async acceptCookies() {
        if (await this.getAcceptCookiesButton().isVisible())
            await this.getAcceptCookiesButton().click()
    }

    private getAcceptCookiesButton() {
        return this.page.locator('[data-test="accept-cookies-button"]')
    }
}