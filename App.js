import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Details from "./src/Components/Details";
import Pokemons from "./src/Components/Pokemons";

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: Pokemons,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(appNavigator);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
