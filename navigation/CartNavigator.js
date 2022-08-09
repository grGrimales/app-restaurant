import React from "react";
import { Platform } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens/Cart";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? "#168aad" : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : "#168aad",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Carrito" }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
