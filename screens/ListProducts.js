import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListProducts = ({ products, route }) => {
  const { name, price, weight } = products;

  // const { title } = route.params;

  return (
    <TouchableOpacity>
      <View style={styles.product}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.description}>
          <Text style={styles.price}>Precio: ${price}</Text>
          <Text style={styles.weight}>Peso: {weight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 20,
    margin: 18,
    borderRadius: 3,
    backgroundColor: "#e9ecef",
  },
  title: {
    fontSize: 20,
    color: "#1e6091",
    textAlign: "center",
    marginBottom: 10,
  },

  description: {
    justifyContent: "space-around",
    flexDirection: "row",
  },

  price: {
    fontSize: 18,
  },

  weight: {
    fontSize: 16,
    color: "#495057",
  },
});

export default ListProducts;
