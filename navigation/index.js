import React from "react";
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
