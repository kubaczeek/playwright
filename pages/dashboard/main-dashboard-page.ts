import {Page} from "@playwright/test";
import {routes} from "../../utils/routes";
import {BasePage} from "../base/base-page";
import {translations} from "../../utils/translations/translations";


export class MainDashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto(routes.dashboard.main);
    }

    async clickDownloadCVButton() {
        await this.getDownloadButton().click();
    }

    private getDownloadButton() {
        return this.page.getByRole('button', {name: translations.downloadCVButton});
    }
}