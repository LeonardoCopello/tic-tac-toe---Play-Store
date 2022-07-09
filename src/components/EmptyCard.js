import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Colors } from "../../constants/colors";

const screenWidth = Dimensions.get("window").width;

export default function EmptyCard({children}) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.textImage}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.EmptyCardBG,
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
  textImage: {
    fontSize: 13,
    color: Colors.textTitle,
  },
});
