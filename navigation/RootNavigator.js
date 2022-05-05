import { NavigationContainer } from "@react-navigation/native";

import { RightDrawerNavigator } from "./RightDrawerNavigator";

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RightDrawerNavigator />
    </NavigationContainer>
  );
};
