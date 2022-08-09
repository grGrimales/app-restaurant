import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
        name="Orders"
        component={OrderItem}
        options={{
          title: "Productos",
        }}
      />
    </Stack.Navigator>
  );
};
