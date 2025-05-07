import { RootStackParamList } from "@/app/_layout";
import { COLORS, CurrencyInfo, SPACINGS } from "@/constants/constants";
import i18n from "@/utils/i18n";
import { filterCurrencies } from "@/utils/search";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CurrencyListEmpty from "./CurrencyListEmpty";
import CurrencyListItem from "./CurrencyListItem";
import CurrencyListSearchBar from "./CurrencyListSearchBar";

// CurrencyList receives a list of CurrencyInfo objects to create the UI.
interface CurrencyListProps {
  limit?: number;
  initialSearchValue?: string;
  data: CurrencyInfo[];
}

type DemoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CurrencyList = ({
  limit,
  initialSearchValue,
  data,
}: CurrencyListProps) => {
  const navigation = useNavigation<DemoScreenNavigationProp>();
  const [search, setSearch] = useState(initialSearchValue ?? "");

  // CurrencyList search feature that can be cancelled when the user clicks the back or close button
  const filterData = useMemo(
    () => filterCurrencies(data, search),
    [search, data]
  );

  const renderFooter = () => {
    const onShowMorePress = () => {
      navigation.navigate("SearchResultsScreen", {
        initialSearchValue: search,
        data,
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
      <CurrencyListSearchBar
        onChange={setSearch}
        initialValue={initialSearchValue}
      />
      {Boolean(filterData.length) ? (
        <FlatList
          data={Boolean(limit) ? filterData.slice(0, limit) : filterData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CurrencyListItem currency={item} />}
          ListFooterComponent={renderFooter()}
        />
      ) : (
        <CurrencyListEmpty />
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
