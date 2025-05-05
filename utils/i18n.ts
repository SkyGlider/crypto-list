import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      createPasskeyHeader: "Welcome to Crypto.com Demo!",
      createPasskey: "Create a passkey :",
      enterPasskeyHeader: "Sign In",
      enterPasskey: "Enter passkey:",
      invalidPasskey: "Invalid passkey!",
      submit: "Submit",
      save: "Save",
      welcome: "Crypto.com Demo",
      searchResults: "{{selectedCurrency}} Currency Search Results",
      clearData: "Clear DB",
      insertData: "Insert DB",
      insertDataLoading: "Loading...",
      crypto: "Crypto",
      fiat: "Fiat",
      all: "All",
      searchPlaceholder: "Search currency...",
      showMore: "See more? Showing max {{limit}} results.",
      noResults: "No results found",
      unknownSymbol: "?",
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
