import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export default function ElmCasaJogo({ onPress, clickLocation, imagemP1 }) {
 return (
    <TouchableOpacity
    style={styles.casa}
    onPress={onPress}
  >
    {clickLocation != "" && (
      <Image
        style={[
          styles.imagemPokemon,
          {
            backgroundColor:
            clickLocation == imagemP1 ? Colors.xColor : Colors.oColor,
          },
        ]}
        source={{ uri: clickLocation }}
      />
    )}
  </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    casa: {
      width: 100,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: "#CCC",
    },
    
    imagemPokemon: {
      width: 100,
      height: 100,
    },

  });