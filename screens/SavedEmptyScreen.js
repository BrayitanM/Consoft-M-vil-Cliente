import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SavedEmptyScreen = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="sofa-outline" size={80} color="black" />
      <Text style={styles.title}>¡Uups!</Text>
      <Text style={styles.subtitle}>Aún no tienes Muebles guardados</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buscar inmuebles</Text>
      </TouchableOpacity>

      {/* Barra de navegación inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" />
          <Text style={styles.navText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bookmark" size={24} color="black" />
          <Text style={styles.navText}>Guardado</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cube" size={24} color="black" />
          <Text style={styles.navText}>Mis pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person" size={24} color="black" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SavedEmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#8B5E3C",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  navText: {
    fontSize: 12,
    textAlign: "center",
  },
});
