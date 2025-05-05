import React from "react";
import { View, StyleSheet } from "react-native";
import CurrencyList from "@/components/CurrencyList";
import { COLORS, SPACINGS } from "@/constants/constants";
import { RouteProp, useRoute } from "@react-navigation/native";
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
    <View style={styles.container}>
      <CurrencyList initialSearchValue={initialSearchValue} />
    </View>
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
