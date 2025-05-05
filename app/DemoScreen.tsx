import React from "react";
import { StyleSheet, View } from "react-native";

import CurrencyList from "../components/CurrencyList";
import useCurrencyStore from "../store/useCurrencyStore";
import { COLORS, SPACINGS } from "@/constants/constants";
import CCButton from "@/components/CCButton";
import CurrencyToggle from "@/components/CurrencyFilterToggle";
import i18n from "../utils/i18n";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./_layout";

const MAX_VISIBLE_RESULTS = 2;

const DemoScreen = () => {
  const { setCurrencies, isCurrenciesLoading, clearCurrencies } =
    useCurrencyStore();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CCButton title={i18n.t("clearData")} onPress={clearCurrencies} />
        <CCButton
          title={
            isCurrenciesLoading
              ? i18n.t("insertDataLoading")
              : i18n.t("insertData")
          }
          onPress={() => setCurrencies()}
        />
        <CurrencyToggle />
      </View>
      <CurrencyList limit={MAX_VISIBLE_RESULTS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.S_1,
    backgroundColor: COLORS.background,
  },
  buttonContainer: {
    padding: SPACINGS.S_1,
    flexDirection: "row",
    gap: SPACINGS.S_1,
  },
});

export default DemoScreen;
