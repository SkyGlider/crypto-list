import { COLORS, SPACINGS } from "@/CCDesignSystem/constants";
import { getPasskey, hasSavedPasskey, savePasskey } from "@/utils/auth";
import i18n from "@/utils/i18n";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CCButton from "../CCDesignSystem/CCButton";
import { RootStackParamList } from "./_layout";

type AuthScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AuthScreen"
>;

export default function AuthScreen() {
  const [enteredPasskey, setEnteredPasskey] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const [firstTimeLogin, setFirstTimeLogin] = useState(false);

  useFocusEffect(() => {
    const check = async () => {
      const hasKey = await hasSavedPasskey();
      setFirstTimeLogin(!hasKey);
    };
    check();
  });

  const navigateToDemo = () => {
    setEnteredPasskey("");
    navigation.reset({
      index: 0,
      routes: [{ name: "DemoScreen" }],
    });
  };

  const handleAction = async () => {
    if (firstTimeLogin && enteredPasskey.trim()) {
      await savePasskey(enteredPasskey);
      navigateToDemo();
      return;
    }
    if (firstTimeLogin && !enteredPasskey.trim()) {
      setError(i18n.t("invalidPasskey"));
      return;
    }
    const stored = await getPasskey();
    if (stored && enteredPasskey === stored) {
      navigateToDemo();
      return;
    }
    setError(i18n.t("invalidPasskey") + " " + stored);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {i18n.t(firstTimeLogin ? "createPasskey" : "enterPasskey")}
      </Text>
      <TextInput
        value={enteredPasskey}
        onChangeText={setEnteredPasskey}
        style={styles.input}
        secureTextEntry={true}
        autoFocus={true}
      />
      <CCButton
        title={i18n.t(firstTimeLogin ? "save" : "submit")}
        onPress={handleAction}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: SPACINGS.S_1,
  },
  text: {
    fontSize: SPACINGS.S_2,
    color: COLORS.textPrimary,
    textAlign: "center",
  },
  errorText: {
    fontSize: SPACINGS.S_2,
    color: COLORS.error,
  },
  input: {
    color: COLORS.textPrimary,
    fontSize: SPACINGS.S_2,
    textAlign: "center",
    width: 200,
    borderWidth: 1,
    borderRadius: SPACINGS.S_1,
    borderColor: COLORS.textPrimary,
  },
});
