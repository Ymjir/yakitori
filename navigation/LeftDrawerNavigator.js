import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeNavigator } from "./HomeNavigator";
import { LeftDrawerContent } from "../components/navigation/LeftDrawerContent";

const screenOptions = {
  drawerPosition: "left",
  drawerType: "slide",
  headerShown: false,
  swipeEdgeWidth: 50,
  swipeMinDistance: 1,
  unmountOnBlur: true,
  overlayColor: "transparent",
};

const LeftDrawer = createDrawerNavigator();

export const LeftDrawerNavigator = () => {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      drawerContent={(props) => <LeftDrawerContent {...props} />}
      screenOptions={screenOptions}
    >
      <LeftDrawer.Screen name="HomeNavigator" component={HomeNavigator} />
    </LeftDrawer.Navigator>
  );
};
