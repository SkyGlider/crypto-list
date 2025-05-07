import { CRYPTOS, FIATS } from "@/constants/constants";
import { act } from "react";
import useCurrencyStore from "../useCurrencyStore";

describe("useCurrencyStore", () => {
  beforeEach(() => {
    // Clear Zustand store between tests
    useCurrencyStore.setState({
      cryptoStore: [],
      fiatStore: [],
      displayCurrencies: [],
    });
  });

  it("initializes with empty list", () => {
    const state = useCurrencyStore.getState();
    expect(state.cryptoStore).toEqual([]);
    expect(state.fiatStore).toEqual([]);
    expect(state.cryptoStore).toEqual([]);
  });

  it("inserts into store", () => {
    act(() => {
      useCurrencyStore.getState().insertIntoStore(CRYPTOS, FIATS);
    });
    const state = useCurrencyStore.getState();
    expect(state.cryptoStore).toEqual(CRYPTOS);
    expect(state.fiatStore).toEqual(FIATS);
  });

  it("clears store", () => {
    act(() => {
      useCurrencyStore.getState().insertIntoStore(CRYPTOS, FIATS);
      useCurrencyStore.getState().clearStore();
    });
    const state = useCurrencyStore.getState();
    expect(state.cryptoStore).toEqual([]);
    expect(state.fiatStore).toEqual([]);
  });

  it("sets display currencies crypto", () => {
    act(() => {
      useCurrencyStore.getState().setDisplayCurrencies(CRYPTOS);
    });
    const state = useCurrencyStore.getState();
    expect(state.displayCurrencies).toEqual(CRYPTOS);
  });

  it("sets display currencies fiat", () => {
    act(() => {
      useCurrencyStore.getState().setDisplayCurrencies(FIATS);
    });
    const state = useCurrencyStore.getState();
    expect(state.displayCurrencies).toEqual(FIATS);
  });

  it("sets display currencies all", () => {
    act(() => {
      useCurrencyStore.getState().setDisplayCurrencies([...CRYPTOS, ...FIATS]);
    });
    const state = useCurrencyStore.getState();
    expect(state.displayCurrencies).toEqual([...CRYPTOS, ...FIATS]);
  });
});
