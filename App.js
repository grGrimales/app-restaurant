import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ShopNavigator from "./navigation/ShopNavigator";

export default function App() {
  return <ShopNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
