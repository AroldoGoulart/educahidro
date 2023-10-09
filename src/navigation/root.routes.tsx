import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "@/screens/public/Onboarding";
import InitPageScreen from "@/screens/public/InitPage";
import QuestionViewScreen from "@/screens/public/QuestionView";
import FinishScreen from "@/screens/public/Finish";
import About from "@/screens/public/About";

const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: "none",
      }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="InitPage" component={InitPageScreen} />
      <Stack.Screen name="Finish" component={FinishScreen} />
      <Stack.Screen name="QuestionView" component={QuestionViewScreen} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  const ref = useNavigationContainerRef();
  return (
    <SafeAreaProvider>
      <NavigationContainer
      >
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
