import i18n from "@/utils/i18n";
import { COLORS, SPACINGS } from "@/constants/constants";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CurrencyEmptyView = () => (
  <View style={styles.container}>
    <Text style={styles.text}>{i18n.t("noResults")}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: SPACINGS.S_2,
    alignItems: "center",
  },
  text: {
    color: COLORS.textSecondary,
    fontSize: SPACINGS.S_2,
  },
});

export default CurrencyEmptyView;
