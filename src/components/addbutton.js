import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../style/colors";


const AddButton = ({ width, height, marginBottom, marginTop, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touchField, { width, height, marginBottom, marginTop }]}>
      <Text style={styles.buttonText}>Add New Todo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchField: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: colors.textSecondary,
  },
});

export default AddButton;
