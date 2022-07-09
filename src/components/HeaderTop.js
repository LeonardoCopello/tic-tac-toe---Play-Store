import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function HeaderTop() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textMainHeader}>Tic-Tac-Toe</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 120,
    alignItems: "center",

    backgroundColor: "#50006A",
  },
  textMainHeader: {
    marginTop: 40,
    color: "white",
    fontSize: 30,
  },
});
