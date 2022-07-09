import { useState, useContext } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";
import { DataContext } from "../../context/dataContext";

const screenWidth = Dimensions.get("window").width;

export default function ListPokemons({ item }) {

    const {playerOne, setPlayerOne, playerTwo, setPlayerTwo, currentPlayer, setCurrentPlayer} = useContext(DataContext)
    const [wasPressed, setWasPressed] = useState(false)

    function getPlayerChoice(pokemon) {
        setWasPressed(true)
        if (playerOne != "" && playerTwo == "") {
          if (playerOne.imagem == pokemon.imageUrl) {
            alert("Escolha um Pokemon diferente do Jogador 1");
          } else {
            setPlayerTwo({ imagem: pokemon.imageUrl, nome: pokemon.nome });
          }
        }
        if (playerOne == "") {
          setPlayerOne({ imagem: pokemon.imageUrl, nome: pokemon.nome });
          setCurrentPlayer("Jogador 2");
        }
      }


    return (
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => getPlayerChoice(item)}
      >
        <Image style={[styles.image, wasPressed && styles.pressed ]} source={{ uri: item.imageUrl }} />
        <Text style={[styles.textImage, {opacity: 0.5 }]}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }
  const styles = StyleSheet.create({
      imageContainer: {
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.cardBG,
        width: screenWidth / 4,
        height: screenWidth / 4,
        borderWidth: 4,
        borderColor: Colors.cardBorder,
        borderRadius: 5,
        elevation: 3,
      },
      pressed: {
        opacity: 0.2,
      },
      image: {
        width: screenWidth / 5,
        height: screenWidth / 5,
      },
      textImage: {
        fontSize: 13,
        color: Colors.textTitle,
        marginBottom: 9,
      },
  })