import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from '../../constants/colors'
import Button from "../components/Button";

const screenWidth = Dimensions.get("window").width;
export default function ShowPlayers({ route, navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMBATE</Text>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: route.params.playerOne.imagem }}
        />
        <Text style={styles.textNome}>{route.params.playerOne.nome}</Text>
      </View>
      <Text style={styles.textVersus}>Versus</Text>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: route.params.playerTwo.imagem }}
          />
          <Text style={styles.textNome}>{route.params.playerTwo.nome}</Text>
      </View>
    <Button style={{marginTop: 10}} color="green" onPress={() => navigation.replace('GameScreen', {playerOne: route.params.playerOne, playerTwo: route.params.playerTwo})}>
      INICIAR COMBATE
    </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.cardBG,
    width: '80%',
    borderWidth: 4,
    borderColor: Colors.cardBorder,
    borderRadius: 5
  },
  textVersus: {
    fontSize: 40,
    color: Colors.textTitle,
  },
  textNome: {
    fontSize: 20,
    marginBottom: 5
  },
  image: {
    width: (screenWidth / 6) * 3,
    height: (screenWidth / 6) * 3,
  },
  title: {
    fontSize: 50,
    color: Colors.textTitle,
    marginBottom: 10,
  },
});
