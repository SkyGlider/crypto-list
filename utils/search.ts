import { CurrencyInfo } from "@/constants/constants";

export const filterCurrencies = (search: string, data: CurrencyInfo[]) => {
  const lower = search.toLowerCase();
  return data.filter(
    (c) =>
      c.name.toLowerCase().startsWith(lower) ||
      c.name.toLowerCase().includes(" " + lower) ||
      c.symbol.toLowerCase().startsWith(lower)
  );
};
