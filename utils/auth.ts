import * as SecureStore from "expo-secure-store";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

const PASSKEY = "passkey";

export const savePasskey = async (passkey: string) => {
  await SecureStore.setItemAsync(PASSKEY, passkey);
};

export const getPasskey = async () => {
  return await SecureStore.getItemAsync(PASSKEY);
};

export const hasSavedPasskey = async () => {
  const key = await getPasskey();
  return !!key;
};

export const deletePasskey = async () => {
  await SecureStore.deleteItemAsync(PASSKEY);
};

export const authenticateWithBiometrics = async () => {
  const compatible = await LocalAuthentication.hasHardwareAsync();
  if (!compatible) {
    Alert.alert("Biometrics unavailable!");
    return false;
  }

  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!enrolled) return false;

  const result = await LocalAuthentication.authenticateAsync();

  return result.success;
};
