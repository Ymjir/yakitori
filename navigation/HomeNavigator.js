import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { MangaViewScreen } from "../screens/MangaViewScreen";
import { ViewChapterScreen } from "../screens/ViewChapterScreen";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MangaView" component={MangaViewScreen} />
      <Stack.Screen name="ViewChapter" component={ViewChapterScreen} />
    </Stack.Navigator>
  );
};
