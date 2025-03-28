import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../style/colors";

const toDoItem = ({ title, width, height }) => {
  return (
    <View style={[styles.box, { width, height }]}>
      <Text style={styles.todoListText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: colors.boxBackground,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  todoListText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
});

export default toDoItem;
