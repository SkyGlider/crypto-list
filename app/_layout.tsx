import "../utils/i18n";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DemoScreen from "./DemoScreen";
import { COLORS, SPACINGS } from "@/constants/constants";
import { StatusBar, StyleSheet } from "react-native";
import SearchResultsScreen, {
  SearchResultsScreenRouteParams,
} from "./SearchResultsScreen";
import i18n from "../utils/i18n";
import useCurrencyStore from "../store/useCurrencyStore";
import CCButton from "../components/CCButton";
import { deletePasskey } from "@/utils/authUtils";
import AuthScreen from "./AuthScreen";

export type RootStackParamList = {
  DemoScreen: undefined;
  SearchResultsScreen: SearchResultsScreenRouteParams;
  AuthScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  const { selectedCurrency } = useCurrencyStore();
  return (
    <>
      <StatusBar backgroundColor={COLORS.background} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.card,
          },
          headerTintColor: COLORS.textPrimary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      >
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            title: i18n.t("enterPasskeyHeader"),
          }}
        />
        <Stack.Screen
          name={"DemoScreen"}
          component={DemoScreen}
          options={{
            title: i18n.t("welcome"),
            headerBackVisible: false,
            headerRight: () => {
              return (
                <CCButton
                  title={"Reset Auth"}
                  onPress={async () => {
                    await deletePasskey();
                  }}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={"SearchResultsScreen"}
          component={SearchResultsScreen}
          options={{ title: i18n.t("searchResults", { selectedCurrency }) }}
        />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: SPACINGS.S_2,
    marginBottom: SPACINGS.S_2,
    color: COLORS.textPrimary,
  },
});
