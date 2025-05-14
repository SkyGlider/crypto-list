import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CCIconButton from "@/ccds/CCIconButton";
import { COLORS, SPACINGS } from "@/ccds/constants";
import CurrencyListFilter from "@/components/CurrencyListFilter";
import { useCurrenciesQuery } from "@/hooks/useCurrencyQuery";
import { deletePasskey } from "@/utils/auth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import CurrencyList from "../components/CurrencyList";
import useCurrencyStore from "../hooks/useCurrencyStore";
import i18n from "../utils/i18n";
import { RootStackParamList } from "./_layout";

const MAX_VISIBLE_RESULTS = 2;

type DemoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "DemoScreen"
>;

const DemoScreen = () => {
  const navigation = useNavigation<DemoScreenNavigationProp>();
  const { isRefetching, refetch } = useCurrenciesQuery();
  const { displayCurrencies, insertIntoStore, clearStore } = useCurrencyStore();

  // Insert data into local DB
  const insertCurrencies = async () => {
    // Simulate querying from remote database
    const { data } = await refetch();
    if (data) {
      insertIntoStore(data.cryptos, data.fiats);
    }
  };

  // Clear local DB and logs the user out
  const logOut = () => {
    clearStore();
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthScreen" }],
    });
  };

  // Reset pass key and log out
  const resetAuth = async () => {
    await deletePasskey();
    logOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.functionsContainer}>
        <Text style={styles.text}>{i18n.t("functions")}</Text>
        <View style={styles.buttonContainer}>
          <CCIconButton
            name={"delete-outline"}
            title={i18n.t("clearData")}
            onPress={clearStore}
          />
          <CCIconButton
            name={isRefetching ? "downloading" : "arrow-downward"}
            title={i18n.t("insertData")}
            onPress={insertCurrencies}
          />
          <CCIconButton
            name={"refresh"}
            title={i18n.t("resetAuth")}
            onPress={resetAuth}
          />
          <CCIconButton
            name={"logout"}
            title={i18n.t("logOut")}
            onPress={logOut}
          />
        </View>
      </View>
      <View style={[styles.functionsContainer, styles.buttonContainer]}>
        <Text style={styles.text}>{i18n.t("currencies")}</Text>
        <CurrencyListFilter />
      </View>
      <CurrencyList limit={MAX_VISIBLE_RESULTS} data={displayCurrencies} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.textPrimary,
    fontSize: SPACINGS.S_2,
    fontWeight: "bold",
  },
  container: { flex: 1 },
  functionsContainer: {
    padding: SPACINGS.S_1,
    gap: SPACINGS.S_1,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: SPACINGS.S_1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: SPACINGS.S_1,
  },
});

export default DemoScreen;
