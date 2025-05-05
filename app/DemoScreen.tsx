import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CCButton from "@/components/CCButton";
import CurrencyToggle from "@/components/CurrencyFilterToggle";
import { COLORS, SPACINGS } from "@/constants/constants";
import { deletePasskey } from "@/utils/auth";
import { useNavigation } from "expo-router";
import CurrencyList from "../components/CurrencyList";
import useCurrencyStore from "../store/useCurrencyStore";
import i18n from "../utils/i18n";

const MAX_VISIBLE_RESULTS = 2;

const DemoScreen = () => {
  const navigation = useNavigation();
  const { setCurrencies, isCurrenciesLoading, clearCurrencies } =
    useCurrencyStore();

  const resetAuth = async () => {
    await deletePasskey();
    logOut();
  };

  const logOut = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.functionsContainer}>
        <Text style={styles.text} >{i18n.t("functions")}</Text>
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
          <CCButton title={i18n.t("resetAuth")} onPress={resetAuth} />
          <CCButton title={i18n.t("logOut")} onPress={logOut} />
        </View>
      </View>
      <View style={[styles.functionsContainer, styles.buttonContainer]}>
        <Text style={styles.text} >{i18n.t("currencies")}</Text>
        <CurrencyToggle />
      </View>
      <CurrencyList limit={MAX_VISIBLE_RESULTS} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.textPrimary,
    fontSize: SPACINGS.S_2,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    padding: SPACINGS.S_1,
    backgroundColor: COLORS.background,
  },
  functionsContainer: {
    padding: SPACINGS.S_1,
    gap: SPACINGS.S_1,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: SPACINGS.S_1,
    alignItems: "center"
  },
});

export default DemoScreen;
