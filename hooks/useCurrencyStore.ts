import { CurrencyInfo } from "@/constants/constants";
import { create } from "zustand";

type State = {
  cryptoStore: CurrencyInfo[];
  fiatStore: CurrencyInfo[];
  displayCurrencies: CurrencyInfo[];
  insertIntoStore: (cryptos: CurrencyInfo[], fiats: CurrencyInfo[]) => void;
  clearStore: () => void;
  setDisplayCurrencies: (displayCurrencies: CurrencyInfo[]) => void;
};

const useCurrencyStore = create<State>((set, get) => ({
  cryptoStore: [],
  fiatStore: [],
  displayCurrencies: [],
  insertIntoStore: async (cryptos: CurrencyInfo[], fiats: CurrencyInfo[]) => {
    set({ cryptoStore: cryptos, fiatStore: fiats });
  },
  clearStore: () => set({ cryptoStore: [], fiatStore: [] }),
  setDisplayCurrencies: (displayCurrencies) => set({ displayCurrencies }),
}));

export default useCurrencyStore;
