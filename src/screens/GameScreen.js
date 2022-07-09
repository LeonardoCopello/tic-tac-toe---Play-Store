import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";
import Button from "../components/Button";
import { DataContext } from "../../context/dataContext";
import ElmCasaJogo from "../components/ElmCasaJogo";

// import { listObjects } from "../data/dataArray";

export default function GameScreen({ route, navigation }) {
  const { setPlayerOne, setPlayerTwo, setCurrentPlayer } =
    useContext(DataContext);

  const [jogo, setJogo] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const { imagem: imagemP1 } = route.params.playerOne;
  const { imagem: imagemP2 } = route.params.playerTwo;

  const [imagemAtual, setImagemAtual] = useState(imagemP1);
  const [vitoria, setVitoria] = useState(false);
  const [empate, setEmpate] = useState(false);

  function goFirstPage() {
    setCurrentPlayer("Jogador 1");
    setPlayerOne("");
    setPlayerTwo("");
    navigation.replace("HomePage");
  }

  const inicio = (l, c) => {
    if (!vitoria && !empate) {
      if (jogo[l][c] !== "") {
        alert("Clique em uma casa vazia");
        return;
      } else {
        defineSimbolo(l, c);
        marcaElemento(l, c, imagemAtual);
      }
    }
  };
  const defineSimbolo = (l, c) => {
    if (imagemAtual == imagemP1) {
      setImagemAtual(imagemP2);
    } else {
      setImagemAtual(imagemP1);
    }
  };

  const marcaElemento = (l, c, imagemAtual) => {
    setJogo([...jogo, (jogo[l][c] = imagemAtual)]);
    verificaEmpate();
    verificaVencedor(imagemAtual);
  };

  const verificaVencedor = (imagemAtual) => {
    verificaLinhas(imagemAtual);
    verificaColunas(imagemAtual);
    verificaDiagonais1(imagemAtual);
    verificaDiagonais2(imagemAtual);
  };

  const verificaLinhas = (imagemAtual) => {
    for (let l = 0; l < 3; l++) {
      let pontos = 0;
      for (let c = 0; c < 3; c++) {
        if (jogo[l][c] == imagemAtual) {
          pontos++;
          pontos == 3 && celebraVitoria(imagemAtual);
        }
      }
    }
  };
  const verificaColunas = () => {
    for (let c = 0; c < 3; c++) {
      let pontos = 0;
      for (let l = 0; l < 3; l++) {
        if (jogo[l][c] == imagemAtual) {
          pontos++;
          pontos == 3 && celebraVitoria(imagemAtual);
        }
      }
    }
  };
  const verificaDiagonais1 = (imagemAtual) => {
    let pontos = 0;
    for (let i = 0; i < 3; i++) {
      if (jogo[i][i] == imagemAtual) {
        pontos++;
        pontos == 3 && celebraVitoria(imagemAtual);
      }
    }
  };
  const verificaDiagonais2 = (imagemAtual) => {
    if (
      jogo[2][0] == imagemAtual &&
      jogo[1][1] == imagemAtual &&
      jogo[0][2] == imagemAtual
    ) {
      celebraVitoria(imagemAtual);
    }
  };
  const verificaEmpate = () => {
    const lengthArray1 = jogo[0].filter((elem) => elem == "").length;
    const lengthArray2 = jogo[1].filter((elem) => elem == "").length;
    const lengthArray3 = jogo[2].filter((elem) => elem == "").length;
    const lengthArrays = lengthArray1 + lengthArray2 + lengthArray3;
    if (lengthArrays == 0) {
      setEmpate(true);
    }
  };

  const celebraVitoria = (imagemAtual) => {
    setImagemAtual(imagemAtual);
    setVitoria(true);
  };

  return (
    <View style={styles.rootContainer}>
        {(!vitoria && !empate) && (
          <View style={styles.headerContainer}>
            <Text style={styles.textTitle}>É a vez do jogador </Text>
            <Image
              style={{ width: 60, height: 60 }}
              source={{ uri: imagemAtual }}
            />
            <Text style={styles.textTitle}> jogar</Text>
          </View>
        )}
        { (vitoria || empate) && (
          <View style={styles.headerContainer}>
            </View>
        )}

      <View style={styles.tableRows}>
        <ElmCasaJogo
          onPress={() => {
            inicio(0, 0);
          }}
          clickLocation={jogo[0][0]}
          imagemP1={imagemP1}
        />
        <ElmCasaJogo
          onPress={() => {
            inicio(0, 1);
          }}
          clickLocation={jogo[0][1]}
          imagemP1={imagemP1}
        />
        <ElmCasaJogo
          onPress={() => {
            inicio(0, 2);
          }}
          clickLocation={jogo[0][2]}
          imagemP1={imagemP1}
        />
      </View>
      <View style={styles.tableRows}>
        <ElmCasaJogo
          onPress={() => {
            inicio(1, 0);
          }}
          clickLocation={jogo[1][0]}
          imagemP1={imagemP1}
        />
        <ElmCasaJogo
          onPress={() => {
            inicio(1, 1);
          }}
          clickLocation={jogo[1][1]}
          imagemP1={imagemP1}
        />
        <ElmCasaJogo
          onPress={() => {
            inicio(1, 2);
          }}
          clickLocation={jogo[1][2]}
          imagemP1={imagemP1}
        />
      </View>
      <View style={styles.tableRows}>
        <ElmCasaJogo
          onPress={() => {
            inicio(2, 0);
          }}
          clickLocation={jogo[2][0]}
          imagemP1={imagemP1}
        />
        <ElmCasaJogo
          onPress={() => {
            inicio(2, 1);
          }}
          clickLocation={jogo[2][1]}
          imagemP1={imagemP1}
        />
        <ElmCasaJogo
          onPress={() => {
            inicio(2, 2);
          }}
          clickLocation={jogo[2][2]}
          imagemP1={imagemP1}
        />
      </View>

      {vitoria && (
        <View style={styles.footerContainer}>
          <Text style={styles.bottomMessage}>O jogador </Text>
          <Image style={styles.imageResult} source={{ uri: imagemAtual }} />
          <Text style={styles.bottomMessage}> foi o vencedor</Text>
        </View>
      )}
      {empate && !vitoria && (
        <Text style={styles.bottomMessage}>{`O jogo terminou empatado`}</Text>
      )}
      {(empate || vitoria) && (
        <Button style={{ marginTop: 10 }} color="green" onPress={goFirstPage}>
          JOGAR NOVAMENTE
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: Colors.gameScreenBG,
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    marginTop: 100,
    height: 120,
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },
  footerContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  tableRows: {
    flexDirection: "row",
  },
  bottomMessage: {
    marginTop: 20,
    fontSize: 20,
    color: Colors.textTitle,
  },
  textTitle: {
    fontSize: 20,
    color: Colors.textTitle,
  },
  imageResult: {
    marginTop: 10,
    width: 70,
    height: 70,
  },
});
