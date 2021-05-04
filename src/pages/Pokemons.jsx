import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import axios from "axios";
import { PokeCard } from "../components/PokeCard";
import colors from "../styles/colors";

export function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [pokeImage, setPokeImage] = useState("");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokeApi, setPokeApi] = useState({});
  const navigation = useNavigation();

  async function fetchPokemons() {
    const { data } = await axios.get(url);

    const newPokemons = data.results.map((pokemon) => {
      const id = pokemon.url.substr(34).slice(0, -1);
      const name = pokemon.name;
      const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return { name, image: pokeImage };
    });

    setPokeApi(data);
    setPokemons(newPokemons);
  }

  function handlePokerSelect() {
    navigation.navigate("Details");
  }

  useEffect(() => {
    fetchPokemons();
  }, [pokeApi]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon!</Text>
      <View style={styles.content}>
        <FlatList
          data={pokemons}
          keyExtractor={(item) => String(item.name)}
          renderItem={({ item }) => {
            return (
              <PokeCard data={item} onPress={() => handlePokerSelect(item)} />
            );
          }}
          numColumns={2}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setUrl(pokeApi.next)}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 22,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: colors.green_dark,
  },
});
