import React from "react";
import { Platform } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens/Cart";
import OrderItem from "../screens/OrderItem";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Ordenes"
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
        name="Ordenes"
        component={OrderItem}
        options={{ title: "Ordenes" }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
