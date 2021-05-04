import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../styles/colors";
export function PokeCard({ data }) {
  return (
    <RectButton style={styles.container}>
      <Image
        style={styles.pokeImage}
        source={{
          uri: data.image,
        }}
      />
      <Text style={styles.title}>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "45%",
    paddingVertical: 10,
    backgroundColor: colors.shape,
    margin: 10,
    alignItems: "center",
    borderRadius: 15,
  },
  title: {
    fontSize: 21,
    color: colors.green_dark,
  },

  pokeImage: {
    width: 100,
    height: 100,
  },
});
