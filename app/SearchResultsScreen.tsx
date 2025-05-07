import CurrencyList from "@/components/CurrencyList";
import { CurrencyInfo } from "@/constants/constants";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { RootStackParamList } from "./_layout";

export type SearchResultsScreenRouteParams = {
  initialSearchValue: string;
  data: CurrencyInfo[];
};

type SearchResultsScreenRouteProp = RouteProp<
  RootStackParamList,
  "SearchResultsScreen"
>;

const SearchResultsScreen = () => {
  const route = useRoute<SearchResultsScreenRouteProp>();
  const { initialSearchValue, data } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <CurrencyList initialSearchValue={initialSearchValue} data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SearchResultsScreen;
