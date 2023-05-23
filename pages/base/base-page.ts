import {Page} from "@playwright/test";

export class BasePage {
    readonly page: Page;

    protected constructor(page: Page) {
        this.page = page;
    }

    getSpanByText(keyword: string) {
        return this.page.locator('span').getByText(keyword);
    }

    getAccountPill() {
        return this.page.locator('[data-test="menu-user"]');
    }

    getH4ByTextContent(keyword: string) {
        return this.page.locator(`//h4[text()="${keyword}"]`);
    }

    getPByTextContent(keyword: string) {
        return this.page.locator(`//p[text()="${keyword}"]`);
    }

    getAnchorByHref(hrefLink: string) {
        return this.page.locator(`a[href="${hrefLink}"]`);
    }
}