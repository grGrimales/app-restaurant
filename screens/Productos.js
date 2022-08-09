import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { PRODUCTS } from "../data/produts";
import ListProducts from "./ListProducts";

const Productos = ({ navigation }) => {
  const renderProducts = ({ item }) => <ListProducts products={item} />;

  return (
    <FlatList
      style={styles.listado}
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={renderProducts}
    />
  );
};

const styles = StyleSheet.create({
  listado: {
    marginBottom: 90,
  },
});

export default Productos;
