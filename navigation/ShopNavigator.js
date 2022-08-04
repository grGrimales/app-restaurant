import React from "react";
import { StyleSheet } from "react-native";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Productos from "../screens/Productos";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1774F2",
  },
};

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.colors.accent,
            height: 70,
          },

          headerTintColor: theme.colors.surface,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Inicio",

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Productos"
          component={Productos}
          options={{
            title: "Productos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-apps-sharp" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    position: "absolute",
  },
});

export default ShopNavigator;
