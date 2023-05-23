import {routes} from "../../utils/routes";
import test, {expect} from "../base/base-test";
import {translations} from "../../utils/translations/translations";

test('Interview task', async ({page, loginPage, mainDashBoardPage, cartPricingPage, cartPaymentDetailsPage, cartErrorPage}) => {
    await loginPage.goto();
    await loginPage.validLogin()
    await expect(mainDashBoardPage.getAccountPill()).toBeVisible()

    await expect(mainDashBoardPage.getSpanByText(translations.cvName)).toBeVisible();
    await mainDashBoardPage.clickDownloadCVButton();

    await cartPricingPage.selectRandomSubscription();
    await cartPricingPage.clickContinueButton();

    await cartPaymentDetailsPage.fillCardInfo();
    await cartPaymentDetailsPage.clickSubmitButton();
    await expect(cartErrorPage.getH4ByTextContent(translations.failedPayment.h4Message)).toBeVisible()
    await expect(cartErrorPage.getPByTextContent(translations.failedPayment.P1Message)).toBeVisible()
    await expect(cartErrorPage.getPByTextContent(translations.failedPayment.P2Message)).toBeVisible()
    await expect(cartErrorPage.getAnchorByHref(routes.cart.paymentDetails)).toBeVisible()
});
