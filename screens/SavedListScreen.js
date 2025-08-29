import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SavedListScreen = () => {
  const [savedItems] = useState([
    {
      id: "1",
      title: "Mueble 2 espacios",
      price: "$1.500.000",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Mueble 2 espacios",
      price: "$1.500.000",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const renderStars = (rating) => (
    <View style={{ flexDirection: "row", marginTop: 4 }}>
      {Array.from({ length: 5 }, (_, index) => (
        <Ionicons
          key={index}
          name={index < rating ? "star" : "star-outline"}
          size={16}
          color="#FFD700"
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={savedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {renderStars(item.rating)}
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="gray" />
          </View>
        )}
      />
    </View>
  );
};

export default SavedListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 6,
  },
});
