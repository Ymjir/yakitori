import { createDrawerNavigator } from "@react-navigation/drawer";

import { LeftDrawerNavigator } from "./LeftDrawerNavigator";
import { RightDrawerContent } from "../components/navigation/RightDrawerContent";

const screenOptions = {
  drawerPosition: "right",
  headerShown: false,
  drawerType: "slide",
  swipeEdgeWidth: 50,
  swipeMinDistance: 1,
  unmountOnBlur: true,
  overlayColor: "transparent",
};

const RightDrawer = createDrawerNavigator();

export const RightDrawerNavigator = () => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <RightDrawerContent {...props} />}
      screenOptions={screenOptions}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerNavigator} />
    </RightDrawer.Navigator>
  );
};
