import { useContext } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from '../../constants/colors'
import { DataContext } from "../../context/dataContext";

const screenWidth = Dimensions.get("window").width;
export default function ShowPlayers() {
  const {playerOne, playerTwo } = useContext(DataContext)

  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer, { backgroundColor: Colors.xColor}]}>
        <Image
          style={styles.image}
          source={{ uri: playerOne.imagem }}
        />
        <Text style={styles.textNome}>{playerOne.nome}</Text>
      </View>
      <Text style={styles.textVersus}>Versus</Text>
      <View style={[styles.cardContainer, { backgroundColor: Colors.oColor}]}>
        <Image
          style={styles.image}
          source={{ uri: playerTwo.imagem }}
          />
          <Text style={styles.textNome}>{playerTwo.nome}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    alignItems: "center",
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    borderWidth: 4,
    borderColor: Colors.cardBorder,
    borderRadius: 5
  },
  textVersus: {
    fontSize: 40,
    color: Colors.textVersus,
  },
  textNome: {
    fontSize: 25,
    marginBottom: 5,
    color: Colors.textNome,
  },
  image: {
    width: (screenWidth / 6) * 2,
    height: (screenWidth / 6) * 2,
  },
});
