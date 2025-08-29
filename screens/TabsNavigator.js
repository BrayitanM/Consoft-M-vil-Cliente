import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Importamos las pantallas
import SearchScreen from "./SearchScreen";
import OrdersScreen from "./OrdersScreen";
import ProfileScreen from "./ProfileScreen";
import SavedEmptyScreen from "./SavedEmptyScreen";
import SavedListScreen from "./SavedListScreen";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  // Estado global simulado: si hay muebles guardados
  const [savedItems] = useState([
    {
      id: "1",
      title: "Mueble 2 espacios",
      price: "$1.500.000",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Buscar") {
              iconName = "search";
            } else if (route.name === "Guardado") {
              iconName = "bookmark";
            } else if (route.name === "Mis pedidos") {
              iconName = "cube";
            } else if (route.name === "Perfil") {
              iconName = "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#8B5E3C", // Marrón
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Buscar" component={SearchScreen} />
        <Tab.Screen
          name="Guardado"
          component={savedItems.length === 0 ? SavedEmptyScreen : SavedListScreen}
        />
        <Tab.Screen name="Mis pedidos" component={OrdersScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsNavigator;
