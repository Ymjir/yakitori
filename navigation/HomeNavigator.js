import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { MangaViewScreen } from "../screens/MangaViewScreen";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MangaView"
        component={MangaViewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
