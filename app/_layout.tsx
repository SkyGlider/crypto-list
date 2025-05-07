import { COLORS, SPACINGS } from "@/CCDesignSystem/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "react-native";
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

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={COLORS.background} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.card },
          headerTintColor: COLORS.textPrimary,
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: {
            padding: SPACINGS.S_1,
            backgroundColor: COLORS.background,
          },
        }}
      >
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ title: i18n.t("enterPasskeyHeader") }}
        />
        <Stack.Screen
          name={"DemoScreen"}
          component={DemoScreen}
          options={{ title: i18n.t("welcome") }}
        />
        <Stack.Screen
          name={"SearchResultsScreen"}
          component={SearchResultsScreen}
          options={{ title: i18n.t("searchResults") }}
        />
      </Stack.Navigator>
    </QueryClientProvider>
  );
}
