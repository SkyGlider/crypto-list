import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      createPasskeyHeader: "Welcome to Crypto.com Demo!",
      createPasskey: "Welcome to your Crypto.com journey!\nBut first, let's create a passkey :",
      enterPasskeyHeader: "Sign In",
      enterPasskey: "Welcome back!\nEnter passkey:",
      invalidPasskey: "Invalid passkey!",
      submit: "Submit",
      save: "Save",
      welcome: "Crypto.com Demo",
      functions: "App Functions",
      currencies: "Currencies",
      searchResults: "{{selectedCurrency}} Search Results",
      clearData: "Clear DB",
      insertData: "Insert DB",
      insertDataLoading: "Loading..",
      crypto: "Crypto",
      fiat: "Fiat",
      all: "All",
      searchPlaceholder: "Search for a currency...",
      showMore: "See more? Showing max {{limit}} results.",
      noResults: "No results found",
      unknownSymbol: "?",
      resetAuth: "Reset pass",
      logOut: "Log out"
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
