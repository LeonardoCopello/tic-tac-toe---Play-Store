import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemons() {
  console.log('fetch2')
  const response = await axios.get(baseUrl);
  setList(response.data.results);
}

function setList(dataPokemon) {
  console.log(dataPokemon)
  const list = [];
  dataPokemon.forEach((element) => {
    const pokemonNumber = element.url.replace(baseUrl, "").replace("/", "");
    list.push({
      id: pokemonNumber,
      nome: element.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`,
    });
    storeData(list);
    return list;
  });
}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("pokemonList", jsonValue);
  } catch (e) {
    alert("Falha na captura dos pokemons. Tente mais tarde");
  }
};

export const getData = async () => {
  const jsonValue = await AsyncStorage.getItem("pokemonList");
  if (jsonValue == null) {
    fetchPokemons()
  } else {

    return JSON.parse(jsonValue);
  }
};
