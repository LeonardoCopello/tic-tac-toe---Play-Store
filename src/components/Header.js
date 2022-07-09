import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../../context/dataContext";
import { Colors } from "../../constants/colors";
import { MotiView } from "moti";
import HeaderTop from "./HeaderTop";
import Button from "./Button";
import EmptyCard from "./EmptyCard";
import FilledCard from "./FilledCard";
import ShowPlayers from "./ShowPlayers";

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
      <MotiView
        from={{
          opacity: 0,
          rotateX: '-100deg',
        }}
        animate={{
          opacity: 1,
          rotateX: '0deg',
        }}
        transition={{
          type: "timing",
          delay: 700,
          duration: 500,
        }}
        style={styles.titleContainer}
      >
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
          <>
            <View style={styles.btnContainer}>
              <Button
                color="green"
                onPress={() =>
                  navigation.replace("GameScreen", {
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
          </>
        )}
        {playerTwo != "" && <ShowPlayers />}
      </MotiView>
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
    height: 240,
    borderRadius: 5,
    backgroundColor: Colors.titleBG,
    marginTop: -20,
    alignItems: "center",
  },
  textTitle: {
    marginTop: 5,
    fontSize: 22,
    color: "#50006A",
  },
  playerTitle: {
    fontSize: 18,
    color: "#50006A",
    marginVertical: 5,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
