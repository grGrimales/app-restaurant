import React from "react";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

import Home from "../screens/Home";
import Productos from "../screens/Productos";
import { ProductDetail } from "../screens/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Productos"
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
        name="Productos"
        component={Productos}
        options={{
          title: "Productos",
        }}
      />

      <Stack.Screen
        name="Detalle del Producto"
        component={ProductDetail}
        //   options={({ route }) => ({ title: route.params.PRODUCTS.name })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    position: "absolute",
    paddingBottom: 10,
  },
});

export default ShopNavigator;
