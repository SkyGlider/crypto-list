import {
  CRYPTOS,
  CurrencyInfo,
  CurrencyType,
  FIATS,
  SelectedCurrencyType,
} from "@/constants/constants";

export const fetchCurrencyList = (
  listType: CurrencyType
): Promise<CurrencyInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listType === CurrencyType.CRYPTO ? CRYPTOS : FIATS);
    }, 500); // simulate 500ms delay
  });
};

export const fetchAllCurrencyLists = async (): Promise<{
  cryptos: CurrencyInfo[];
  fiats: CurrencyInfo[];
}> => {
  const [cryptos, fiats] = await Promise.all([
    fetchCurrencyList(CurrencyType.CRYPTO),
    fetchCurrencyList(CurrencyType.FIAT),
  ]);
  return { cryptos, fiats };
};
