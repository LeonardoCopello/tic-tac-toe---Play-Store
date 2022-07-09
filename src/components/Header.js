import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../../context/dataContext";
import { Colors } from "../../constants/colors";

import HeaderTop from "./HeaderTop";
import Button from "./Button";
import EmptyCard from "./EmptyCard";
import FilledCard from "./FilledCard";

const screenWidth = Dimensions.get("window").width;
export default function Header() {
  const navigation = useNavigation();

  const {
    playerOne,
    setPlayerOne,
    playerTwo,
    setPlayerTwo,
    setCurrentPlayer,
    currentPlayer,
  } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <HeaderTop />
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Jogo da Velha do Pokemon</Text>
        {playerTwo == "" && (
          <Text style={styles.playerTitle}>
            {currentPlayer} - Escolha seu Pokemon
          </Text>
        )}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {playerOne != "" ? (
            <FilledCard source={{ uri: playerOne.imagem }}>
              Jogador 1
            </FilledCard>
          ) : (
            <EmptyCard>Jogador 1</EmptyCard>
          )}
          {playerTwo != "" ? (
            <FilledCard source={{ uri: playerTwo.imagem }}>
              Jogador 2
            </FilledCard>
          ) : (
            <EmptyCard>Jogador 2</EmptyCard>
          )}
        </View>
        {playerTwo != "" && (
          <View style={styles.btnContainer}>
            <Button
              color="green"
              onPress={() =>
                navigation.replace("ShowPlayers", {
                  playerOne: playerOne,
                  playerTwo: playerTwo,
                })
              }
            >
              CONFIRMAR
            </Button>
            <Button
              color="red"
              onPress={() => {
                setCurrentPlayer("Jogador 1");
                setPlayerOne("");
                setPlayerTwo("");
              }}
            >
              NOVA ESCOLHA
            </Button>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    width: "90%",
    height: 220,
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: -20,
    alignItems: "center",
  },
  textTitle: {
    marginTop: 5,
    fontSize: 25,
    color: "#50006A",
  },
  playerTitle: {
    fontSize: 18,
    color: "#50006A",
    marginVertical: 5,
  },
  image: {
    width: screenWidth / 5,
    height: screenWidth / 5,
  },
  textImage: {
    fontSize: 13,
    color: Colors.textTitle,
    marginBottom: 30,
  },
  containerChoice: {
    width: screenWidth / 4,
    height: screenWidth / 4,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.cardBorder,
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
});
