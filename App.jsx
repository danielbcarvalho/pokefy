import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Details } from "./src/pages/Details";
import { Pokemons } from "./src/pages/Pokemons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Pokemons" component={Pokemons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
