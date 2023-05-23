import * as process from "process";

const allTranslations = [{
    id: "1",
    failedPayment: {
        h4Message: "Coś poszło nie tak z Twoją płatnością",
        P1Message: "Twoja płatność nie mogła zostać zrealizowana.",
        P2Message: "Sprawdź swoje dane do płatności lub spróbuj jeszcze raz inną metodą płatności."
    },
    downloadCVButton: "Pobierz CV",
    cvName: "CV - TEST"
}]

const desiredLocale = process.env.LANGUAGE;

export const translations =  allTranslations.find(obj => obj.id === desiredLocale);
