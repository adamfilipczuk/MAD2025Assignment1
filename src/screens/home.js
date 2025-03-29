import React from "react";
import { FlatList, Text, View, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import ToDoItem from "../components/todo"; 
import AddButton from "../components/addbutton"; 
import colors from "../style/colors";

export default function Home({ navigation }) {  
  const data = [
    { itemId: "1", title: "Buy milk" },
    { itemId: "2", title: "Buy bread" },
    { itemId: "3", title: "Buy eggs" },
  ];

  const imageMap = {
    add: require("../../assets/add.png"),
  };

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <View style={styles.container}>
        <Text style={styles.titleText}>My Todo List</Text>
        <View style={styles.line} />

        {/* FlatList to render each Todo Item */}
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ToDoItem
              title={item.title}
              width={screenWidth * 0.85}
              height={screenHeight * 0.05}
            />
          )}
          keyExtractor={(item) => item.itemId}
        />
        <View style={styles.line} />
        {/* Button Container */}
        <View style={styles.buttonContainer}>
          <AddButton
            width={screenWidth * 0.4}
            height={screenHeight * 0.05}
            marginBottom={screenHeight * 0.04}
            marginTop={screenHeight * 0.01}
            onPress={() => navigation.navigate("Add")}
            image={require("../../assets/add.png")}
            title="Add Todo"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
    line: {
      height: 1, // Thin line
      width: "90%", // Full width
      backgroundColor: "black", // Light gray color
      marginVertical: 10, // Space above & below
    },
  buttonContainer: {
    marginTop: 5,  // Add margin for better spacing
    marginBottom: 10,
  },
});
