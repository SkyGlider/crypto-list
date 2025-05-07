import i18n from "@/utils/i18n";
import { COLORS, SPACINGS } from "@/constants/constants";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// CurrencyList includes an empty view for displaying an empty list.
const CurrencyListEmpty = () => (
  <View style={styles.container}>
    <MaterialIcons
      name={"folder-off"}
      size={SPACINGS.S_6}
      color={COLORS.textSecondary}
    />
    <Text style={styles.text}>{i18n.t("noResults")}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: SPACINGS.S_2,
    alignItems: "center",
  },
  text: {
    marginVertical: SPACINGS.S_1,
    color: COLORS.textSecondary,
    fontSize: SPACINGS.S_2,
  },
});

export default CurrencyListEmpty;
