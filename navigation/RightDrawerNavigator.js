import { createDrawerNavigator } from "@react-navigation/drawer";

import { LeftDrawerNavigator } from "./LeftDrawerNavigator";
import { RightDrawerContent } from "../components/navigation/RightDrawerContent";
import { WIDTH } from "../styles";

const screenOptions = {
  drawerPosition: "right",
  headerShown: false,
  drawerType: "slide",
  swipeEdgeWidth: WIDTH / 3,
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
