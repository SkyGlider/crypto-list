import { COLORS } from "@/constants/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import useCurrencyStore from "../store/useCurrencyStore";
import "../utils/i18n";
import i18n from "../utils/i18n";
import AuthScreen from "./AuthScreen";
import DemoScreen from "./DemoScreen";
import SearchResultsScreen, {
  SearchResultsScreenRouteParams,
} from "./SearchResultsScreen";

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
