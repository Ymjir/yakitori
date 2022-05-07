import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { MangaViewScreen } from "../screens/MangaViewScreen";
import { ViewChapterScreen } from "../screens/ViewChapterScreen";

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
      <Stack.Screen
        name="ViewChapter"
        component={ViewChapterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
