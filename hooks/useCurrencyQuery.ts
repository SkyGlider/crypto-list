import { useQuery } from "@tanstack/react-query";
import { fetchCurrencyList } from "../api/api";
import { CurrencyType } from "@/constants/constants";

export const useCurrenciesQuery = () => {
  const queryFn = async () => {
    const [cryptos, fiats] = await Promise.all([
      fetchCurrencyList(CurrencyType.CRYPTO),
      fetchCurrencyList(CurrencyType.FIAT),
    ]);
    return { cryptos, fiats };
  };

  return useQuery({
    queryKey: ["currencies"],
    queryFn,
  });
};
