import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      enterPasskeyHeader: "Welcome to Crypto.com!",
      createPasskey:
        "Welcome to your Crypto.com journey!\nBut first, let's create a passkey :",
      enterPasskey: "Welcome back!\nEnter passkey:",
      invalidPasskey: "Invalid passkey!",
      submit: "Submit",
      save: "Save",
      welcome: "Crypto.com Demo",
      functions: "App Functions",
      clearData: "Clear DB",
      insertData: "Insert DB",
      resetAuth: "Reset pass",
      logOut: "Log out",
      currencies: "Currencies Search",
      searchResults: "Expanded Currencies Search",
      searchPlaceholder: "Search for a currency...",
      showMore: "See more? Showing max {{limit}} results.",
      noResults: "No results found",
      unknownSymbol: "?",
      crypto: "Crypto",
      fiat: "Fiat",
      all: "All",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
