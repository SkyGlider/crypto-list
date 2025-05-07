import * as SecureStore from "expo-secure-store";

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
