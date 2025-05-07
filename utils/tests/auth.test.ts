import * as SecureStore from "expo-secure-store";
import { deletePasskey, getPasskey, savePasskey } from "../auth";

jest.mock("expo-secure-store");

describe("auth utils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("saves the passkey", async () => {
    (SecureStore.setItemAsync as jest.Mock).mockResolvedValueOnce(undefined);
    await expect(savePasskey("1234")).resolves.toBeUndefined();
    expect(SecureStore.setItemAsync).toHaveBeenCalledWith(
      "user_passkey",
      "1234"
    );
  });

  it("gets the passkey", async () => {
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce("1234");
    const result = await getPasskey();
    expect(result).toBe("1234");
  });

  it("deletes the passkey", async () => {
    (SecureStore.deleteItemAsync as jest.Mock).mockResolvedValueOnce(undefined);
    await expect(deletePasskey()).resolves.toBeUndefined();
    expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith("user_passkey");
  });
});
