import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../../constants/colors";

export default function Button({ onPress, children, style, color }) {
  return (
    <TouchableOpacity style={[styles.container, style, {backgroundColor: color}]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderWidth: 3,
    borderColor: Colors.textTitle,
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    color: Colors.textTitle,
    textAlign: 'center'
  },
});
