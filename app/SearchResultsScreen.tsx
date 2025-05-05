import CurrencyList from "@/components/CurrencyList";
import { COLORS, SPACINGS } from "@/constants/constants";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { RootStackParamList } from "./_layout";

export type SearchResultsScreenRouteParams = {
  initialSearchValue: string;
};

type SearchResultsScreenRouteProp = RouteProp<
  RootStackParamList,
  "SearchResultsScreen"
>;

const SearchResultsScreen = () => {
  const route = useRoute<SearchResultsScreenRouteProp>();
  const { initialSearchValue } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <CurrencyList initialSearchValue={initialSearchValue} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.S_1,
    backgroundColor: COLORS.background,
  },
});

export default SearchResultsScreen;
