import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = ({ navigation }) => {
  const navigateProductos = () => {
    navigation.navigate("Productos");
  };
  return (
    <View style={styles.contenedor}>
      <Text>Home</Text>
      <Button title="Ir a Productos" onPress={() => navigateProductos()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Home;
