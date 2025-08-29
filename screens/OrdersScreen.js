import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrdersScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Pantalla de pedidos</Text>
  </View>
);

export default OrdersScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
