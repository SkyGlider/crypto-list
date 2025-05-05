import {
  CRYPTOS,
  CurrencyInfo,
  FIATS,
  SelectedCurrencyType,
} from "@/constants/constants";
import { create } from "zustand";
import { fetchAllCurrencyLists } from "../api/api";

type State = {
  cryptos: CurrencyInfo[];
  fiats: CurrencyInfo[];
  selectedCurrency: SelectedCurrencyType;
  setSelectedCurrency: (selectedCurrency: SelectedCurrencyType) => void;
  setCurrencies: () => void;
  isCurrenciesLoading: boolean;
  clearCurrencies: () => void;
};

const useCurrencyStore = create<State>((set, get) => ({
  cryptos: [],
  fiats: [],
  selectedCurrency: SelectedCurrencyType.ALL,
  setSelectedCurrency: (selectedCurrency) => set({ selectedCurrency }),
  setCurrencies: async () => {
    set({ isCurrenciesLoading: true });
    try {
      const { cryptos, fiats } = await fetchAllCurrencyLists();
      set({ cryptos, fiats });
    } catch (e) {
      console.log(e);
    } finally {
      set({ isCurrenciesLoading: false });
    }
  },
  isCurrenciesLoading: false,
  clearCurrencies: () => set({ cryptos: [], fiats: [] }),
}));

export default useCurrencyStore;
