import React, { useEffect, useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getPasskey, hasSavedPasskey, savePasskey } from "@/utils/authUtils";
import { COLORS, SPACINGS } from "@/constants/constants";
import { RootStackParamList } from "./_layout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import i18n from "@/utils/i18n";
import CCButton from "../components/CCButton";

type SetupPasskeyScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function AuthScreen() {
  const [enteredPasskey, setEnteredPasskey] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation<SetupPasskeyScreenNavigationProp>();
  const [firstTimeLogin, setFirstTimeLogin] = useState(false);

  useEffect(() => {
    const check = async () => {
      const hasKey = await hasSavedPasskey();
      setFirstTimeLogin(!hasKey);
    };
    check();
  }, []);

  const handleSave = async () => {
    if (enteredPasskey.trim()) {
      await savePasskey(enteredPasskey);
      navigation.navigate("DemoScreen");
    }
  };

  const checkPasskey = async () => {
    const stored = await getPasskey();
    if (enteredPasskey === stored) {
      navigation.navigate("DemoScreen");
    } else {
      setError(i18n.t("invalidPasskey") + " " + stored);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {firstTimeLogin ? i18n.t("createPasskey") : i18n.t("enterPasskey")}
      </Text>
      <TextInput
        value={enteredPasskey}
        onChangeText={setEnteredPasskey}
        style={styles.input}
        secureTextEntry={true}
        autoFocus={true}
      />
      <CCButton
        title={firstTimeLogin ? i18n.t("save") : i18n.t("submit")}
        onPress={firstTimeLogin ? handleSave : checkPasskey}
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
    backgroundColor: COLORS.background,
    gap: SPACINGS.S_1,
  },
  text: {
    fontSize: SPACINGS.S_2,
    color: COLORS.textPrimary,
  },
  errorText: {
    fontSize: SPACINGS.S_2,
    color: COLORS.error,
  },
  input: {
    color: COLORS.textPrimary,
    fontSize: SPACINGS.S_2,
    textAlign: "center",
  },
});
