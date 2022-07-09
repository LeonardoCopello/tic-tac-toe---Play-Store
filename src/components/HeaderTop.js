import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MotiView } from 'moti'

export default function HeaderTop() {
  return (
    <MotiView
      from={{
        opacity: 0,
        translateY: -150
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: 'timing',
        delay: 200,
        duration: 600,
      }}
    style={styles.headerContainer}>
      <Text style={styles.textMainHeader}>Tic-Tac-Toe</Text>
    </MotiView>
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
