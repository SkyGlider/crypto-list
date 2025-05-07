import {
  CRYPTOS,
  CurrencyInfo,
  CurrencyType,
  FIATS,
} from "@/constants/constants";

// API simulated to provide the two datasets which contain CurrencyInfo objects
export const fetchCurrencyList = (
  listType: CurrencyType
): Promise<CurrencyInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listType === CurrencyType.CRYPTO ? CRYPTOS : FIATS);
    }, 500); // simulate 500ms delay
  });
};
