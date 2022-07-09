import { useLayoutEffect, useContext } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions
} from "react-native";
import Header from "../components/Header";
import ListPokemons from "../components/ListPokemons";
import { Colors } from "../../constants/colors"
import { DataContext } from "../../context/dataContext";
import { getData } from "../../data/http/httpData";

const screenWidth = Dimensions.get("window").width;

export default function HomePage() {

  const {pokemonList, setPokemonList, playerTwo } = useContext(DataContext)

  useLayoutEffect(() => {

    async function justToUseAsyncAwait() {
      const pokeList = await getData()
      console.log(pokeList)
      setPokemonList(pokeList)
    }
    justToUseAsyncAwait()
  }, []);

  return (
      <View style={styles.container}>
        <Header />
        { playerTwo == "" && 
        <FlatList
          style={{ marginTop: 20 }}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={pokemonList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <ListPokemons item={item}/> }
        /> }
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E6E6E6',
    // justifyContent: "center",
    alignItems: "center",
  },
});
