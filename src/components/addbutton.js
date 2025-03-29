import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import colors from "../style/colors";

const AddButton = ({ width, height, marginBottom, marginTop, onPress, title, image }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.touchField, { width, height, marginBottom, marginTop }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
      <Image source={image} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  buttonText: {
    fontSize: 18,
    color: colors.textSecondary,
    paddingRight:10,
  },
});

export default AddButton;
