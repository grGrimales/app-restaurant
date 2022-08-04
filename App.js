import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ShopNavigator from "./navigation/ShopNavigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1774F2",
  },
};

console.log(theme.colors);
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
