import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Productos = ({ navigation }) => {
  const navigateHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.contenedor}>
      <Text>Productos</Text>
      <Button title="Ir a Home" onPress={() => navigateHome()} />
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

export default Productos;
