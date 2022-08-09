import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StyleSheet, Text, View, FlatList } from "react-native";
import { PRODUCTS } from "../data/produts";
import ListProducts from "./ListProducts";

const Productos = ({ navigation }) => {
  const { products } = useSelector((state) => state.products);

  useSelector((state) => console.log(state));
  const renderProducts = ({ item }) => <ListProducts products={item} />;

  return (
    <FlatList
      style={styles.listado}
      data={products}
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
