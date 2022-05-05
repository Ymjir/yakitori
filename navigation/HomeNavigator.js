import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screen/HomeScreen";
import { MangaViewScreen } from "../screen/MangaViewScreen";

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
