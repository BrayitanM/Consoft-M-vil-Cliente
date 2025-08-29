import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Pantalla de búsqueda</Text>
  </View>
);

export default SearchScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
