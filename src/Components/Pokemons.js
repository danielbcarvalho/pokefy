import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Pokemons(props) {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemons!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Details")}
      >
        <Text style={styles.textButton}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
  },
  button: {
    margin: 30,
    width: 200,
    height: 50,
    backgroundColor: "green",
    borderRadius: 20,
    justifyContent: "center",
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
  },
});
