import useCurrencyStore from "@/store/useCurrencyStore";
import { COLORS, SelectedCurrencyType, SPACINGS } from "@/constants/constants";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const FILTERS = [
  SelectedCurrencyType.CRYPTO,
  SelectedCurrencyType.FIAT,
  SelectedCurrencyType.ALL,
];

const CurrencyToggle = () => {
  const { selectedCurrency, setSelectedCurrency } = useCurrencyStore();

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

export default CurrencyToggle;
