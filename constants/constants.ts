export enum CurrencyType {
  CRYPTO = "Crypto",
  FIAT = "Fiat",
}

export type CurrencyInfo = {
  id: string;
  name: string;
  symbol: string;
  code?: string;
};

// Mock DB Data - List A
export const CRYPTOS: CurrencyInfo[] = [
  {
    id: "BTC",
    name: "Bitcoin",
    symbol: "BTC",
  },
  {
    id: "ETH",
    name: "Ethereum",
    symbol: "ETH",
  },
  {
    id: "XRP",
    name: "XRP",
    symbol: "XRP",
  },
  {
    id: "BCH",
    name: "Bitcoin Cash",
    symbol: "BCH",
  },
  {
    id: "LTC",
    name: "Litecoin",
    symbol: "LTC",
  },
  {
    id: "EOS",
    name: "EOS",
    symbol: "EOS",
  },
  {
    id: "BNB",
    name: "Binance Coin",
    symbol: "BNB",
  },
  {
    id: "LINK",
    name: "Chainlink",
    symbol: "LINK",
  },
  {
    id: "NEO",
    name: "NEO",
    symbol: "NEO",
  },
  {
    id: "ETC",
    name: "Ethereum Classic",
    symbol: "ETC",
  },
  {
    id: "ONT",
    name: "Ontology",
    symbol: "ONT",
  },
  {
    id: "CRO",
    name: "Crypto.com Chain",
    symbol: "CRO",
  },
  {
    id: "CUC",
    name: "Cucumber",
    symbol: "CUC",
  },
  {
    id: "USDC",
    name: "USD Coin",
    symbol: "USDC",
  },
];

// Mock DB Data - List B
export const FIATS: CurrencyInfo[] = [
  {
    id: "SGD",
    name: "Singapore Dollar",
    symbol: "$",
    code: "SGD",
  },
  {
    id: "EUR",
    name: "Euro",
    symbol: "€",
    code: "EUR",
  },
  {
    id: "GBP",
    name: "British Pound",
    symbol: "£",
    code: "GBP",
  },
  {
    id: "HKD",
    name: "Hong Kong Dollar",
    symbol: "$",
    code: "HKD",
  },
  {
    id: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    code: "JPY",
  },
  {
    id: "AUD",
    name: "Australian Dollar",
    symbol: "$",
    code: "AUD",
  },
  {
    id: "USD",
    name: "United States Dollar",
    symbol: "$",
    code: "USD",
  },
];
