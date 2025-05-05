import useCurrencyStore from "@/store/useCurrencyStore";
import { COLORS, SelectedCurrencyType, SPACINGS } from "@/constants/constants";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import CurrencySearchBar from "./CurrencySearchBar";
import CurrencyEmptyView from "./CurrencyEmptyView";
import CurrencyListItem from "./CurrencyListItem";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/app/_layout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import i18n from "@/utils/i18n";

interface CurrencyListProps {
  limit?: number;
  initialSearchValue?: string;
}

type DemoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CurrencyList = ({ limit, initialSearchValue }: CurrencyListProps) => {
  const navigation = useNavigation<DemoScreenNavigationProp>();
  const { cryptos, fiats, selectedCurrency } = useCurrencyStore();
  const [search, setSearch] = useState(initialSearchValue ?? "");

  const data = useMemo(() => {
    switch (selectedCurrency) {
      case SelectedCurrencyType.CRYPTO:
        return cryptos;
      case SelectedCurrencyType.FIAT:
        return fiats;
      default:
        return [...cryptos, ...fiats];
    }
  }, [cryptos, fiats, selectedCurrency]);

  const filterData = useMemo(() => {
    const lower = search.toLowerCase();
    return data.filter(
      (c) =>
        c.name.toLowerCase().startsWith(lower) ||
        c.name.toLowerCase().includes(" " + lower) ||
        c.symbol.toLowerCase().startsWith(lower)
    );
  }, [search, data]);

  const renderFooter = () => {
    const onShowMorePress = () => {
      navigation.navigate("SearchResultsScreen", {
        initialSearchValue: search,
      });
    };

    if (limit && filterData.length > limit) {
      return (
        <TouchableOpacity
          style={styles.showMoreButton}
          onPress={onShowMorePress}
        >
          <Text style={styles.showMoreText}>
            {i18n.t("showMore", { limit })}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <CurrencySearchBar
        onChange={setSearch}
        initialValue={initialSearchValue}
      />
      {filterData.length === 0 ? (
        <CurrencyEmptyView />
      ) : (
        <FlatList
          data={Boolean(limit) ? filterData.slice(0, limit) : filterData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CurrencyListItem currency={item} />}
          ListFooterComponent={renderFooter()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.S_1,
    gap: SPACINGS.S_2,
  },
  showMoreButton: {
    padding: SPACINGS.S_2,
    alignItems: "center",
    marginTop: SPACINGS.S_1,
    borderRadius: SPACINGS.S_1,
  },
  showMoreText: {
    color: COLORS.accent,
    fontWeight: "bold",
  },
});

export default CurrencyList;
