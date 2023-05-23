import {LoginPage} from "../../pages/login/login-page";
import {MainDashboardPage} from "../../pages/dashboard/main-dashboard-page";
import {CartPricingPage} from "../../pages/cart/cart-pricing-page";
import {PaymentDetailsPage} from "../../pages/cart/payment-details-page";
import {CartErrorPage} from "../../pages/cart/cart-error-page";
import {test as baseTest} from "@playwright/test";

interface PageObjects {
    loginPage: LoginPage;
    mainDashBoardPage: MainDashboardPage;
    cartPricingPage: CartPricingPage;
    cartPaymentDetailsPage: PaymentDetailsPage;
    cartErrorPage: CartErrorPage;
}

const test = baseTest.extend<PageObjects>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    mainDashBoardPage: async ({page}, use) => {
        await use(new MainDashboardPage(page));
    },
    cartPricingPage: async ({page}, use) => {
        await use(new CartPricingPage(page));
    },
    cartPaymentDetailsPage: async ({page}, use) => {
        await use(new PaymentDetailsPage(page));
    },
    cartErrorPage: async ({page}, use) => {
        await use(new CartErrorPage(page));
    },
});

test.beforeEach(async ({}) => {
});

test.afterEach(async ({}) => {
});

export default test;
export const expect = test.expect;