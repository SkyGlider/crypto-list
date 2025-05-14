import { COLORS, SPACINGS } from "@/ccds/constants";
import { CurrencyType } from "@/constants/constants";
import useCurrencyStore from "@/hooks/useCurrencyStore";
import i18n from "@/utils/i18n";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FILTERS = [i18n.t("all"), CurrencyType.CRYPTO, CurrencyType.FIAT];

// Third, Fourth and Fifth buttons to change displayedCurrencies to show crypto, fiat or all.
const CurrencyListFilter = () => {
  const { cryptoStore, fiatStore, setDisplayCurrencies } = useCurrencyStore();
  const [selectedCurrency, setSelectedCurrency] = useState(FILTERS[0]);

  // Listens to the local DB and selectedCurrency to set displayedCurrency
  useEffect(() => {
    switch (selectedCurrency) {
      case CurrencyType.CRYPTO:
        return setDisplayCurrencies(cryptoStore);
      case CurrencyType.FIAT:
        return setDisplayCurrencies(fiatStore);
      default:
        return setDisplayCurrencies([...cryptoStore, ...fiatStore]);
    }
  }, [cryptoStore, fiatStore, selectedCurrency]);

  return (
    <View style={styles.tabContainer}>
      {FILTERS.map((filter) => (
        <TouchableOpacity
          key={filter}
          onPress={() => setSelectedCurrency(filter)}
          style={
            selectedCurrency === filter ? styles.selectedTab : styles.defaultTab
          }
        >
          <Text style={styles.text}>{filter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  tabContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    borderRadius: SPACINGS.S_1,
    backgroundColor: COLORS.card,
    overflow: "hidden",
  },
  selectedTab: {
    paddingHorizontal: SPACINGS.S_2,
    paddingVertical: SPACINGS.S_1,
    backgroundColor: COLORS.accent,
    borderRadius: SPACINGS.S_1,
  },
  defaultTab: {
    paddingHorizontal: SPACINGS.S_2,
    paddingVertical: SPACINGS.S_1,
  },
});

export default CurrencyListFilter;
