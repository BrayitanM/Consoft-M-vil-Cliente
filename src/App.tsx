import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SalesScreen from '../screens/SalesScreen';
import ClientsScreen from '../screens/ClientsScreen';
import ReportsScreen from '../screens/ReportsScreen';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Products: undefined;
  Sales: undefined;
  Clients: undefined;
  Reports: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ConSoft - Panel' }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ title: 'Productos' }}
        />
        <Stack.Screen
          name="Sales"
          component={SalesScreen}
          options={{ title: 'Ventas' }}
        />
        <Stack.Screen
          name="Clients"
          component={ClientsScreen}
          options={{ title: 'Clientes' }}
        />
        <Stack.Screen
          name="Reports"
          component={ReportsScreen}
          options={{ title: 'Reportes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

