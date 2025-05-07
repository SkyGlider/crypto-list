import { COLORS, SPACINGS } from "@/CCDesignSystem/constants";
import i18n from "@/utils/i18n";
import { MaterialIcons } from "@expo/vector-icons";
import React, { memo, useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const DEFAULT_DEBOUNCE_DURATION = 300; // Debounce delay: 300ms

interface CurrencyListSearchBarProps {
  onChange: (text: string) => void;
  initialValue?: string;
  placeholder?: string;
}

const CurrencyListSearchBar = ({
  onChange,
  initialValue,
  placeholder,
}: CurrencyListSearchBarProps) => {
  const [value, setValue] = useState(initialValue ?? "");
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedVal(value);
    }, DEFAULT_DEBOUNCE_DURATION);

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [value]);

  useEffect(() => {
    onChange(debouncedVal);
  }, [debouncedVal, onChange]);

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="search"
        size={SPACINGS.S_3}
        color={COLORS.textSecondary}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={placeholder || i18n.t("searchPlaceholder")}
        placeholderTextColor={COLORS.textSecondary}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={() => setValue("")}>
          <MaterialIcons
            name="close"
            size={SPACINGS.S_3}
            color={COLORS.textSecondary}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    paddingHorizontal: SPACINGS.S_2,
    borderRadius: SPACINGS.S_1,
  },
  input: {
    color: COLORS.textPrimary,
    fontSize: SPACINGS.S_2,
    flex: 1,
  },
  searchIcon: {
    marginRight: SPACINGS.S_1,
  },
  clearIcon: {
    marginLeft: SPACINGS.S_1,
  },
});

export default memo(CurrencyListSearchBar);
