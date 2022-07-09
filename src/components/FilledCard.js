import React from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import { Colors } from "../../constants/colors";

const screenWidth = Dimensions.get("window").width;

export default function FilledCard({ children, source }) {
  return (
    <View style={[styles.containerChoice, (children == "Jogador 1") ? {backgroundColor: "red"} : {backgroundColor: "blue"}]}>
      <Image style={styles.image} source={source} />
      <Text style={styles.textImage}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
