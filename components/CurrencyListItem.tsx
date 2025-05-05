import React, { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, CurrencyInfo, SPACINGS } from "@/constants/constants";
import i18n from "@/utils/i18n";

interface CurrencyListItemProps {
  currency: CurrencyInfo;
}

const CurrencyListItem = ({ currency }: CurrencyListItemProps) => {
  const iconLetter = (currency.symbol || i18n.t("unknownSymbol"))[0];
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.icon}>
        <Text style={styles.name}>{iconLetter}</Text>
      </View>
      <View>
        <Text style={styles.name}>{currency.name}</Text>
        <Text style={styles.symbol}>{currency.symbol}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: SPACINGS.S_5,
    height: SPACINGS.S_5,
    borderRadius: SPACINGS.S_3,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACINGS.S_2,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    padding: SPACINGS.S_2,
    borderRadius: SPACINGS.S_1,
    marginBottom: SPACINGS.S_1,
  },
  name: {
    color: COLORS.textPrimary,
    fontSize: 18,
  },
  symbol: {
    color: COLORS.textSecondary,
    fontSize: 14,
    marginTop: SPACINGS.S_0,
  },
});

export default memo(CurrencyListItem);
