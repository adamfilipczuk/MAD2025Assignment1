import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../style/colors";
import AddButton from "../components/addbutton";

export default function App({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const imageMap = {
      cancel: require("../../assets/cancel.png"),
      save: require("../../assets/save.png"),
    };

  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Add New Todo</Text>
        <View style={styles.line} />

        <Text style={styles.headingText}>Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Item Name"
        />
      
        <Text style={styles.headingText}>Description:</Text>
        <TextInput
          style={styles.multiLineInput}
          value={description}
          onChangeText={setDescription}
          placeholder="Item description"
          multiline
          numberOfLines={4}
        />
        <View style={styles.buttonContainer}>
          <AddButton
            width={screenWidth * 0.4}
            height={screenHeight * 0.05}
            marginBottom={screenHeight * 0.04}
            marginTop={screenHeight * 0.01}
            onPress={() => navigation.goBack()}
            image={imageMap.cancel}
            title="Cancel"
          />
           <AddButton
            width={screenWidth * 0.4}
            height={screenHeight * 0.05}
            marginBottom={screenHeight * 0.04}
            marginTop={screenHeight * 0.01}
            //onPress={() => navigation.navigate("Home")} 
            image={imageMap.save}
            title="Save"
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
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
    textAlign: "left",
    width: "100%",
    marginVertical: 10,
  },
  line: {
    height: 1,
    width: "90%",
    backgroundColor: "black",
    marginVertical: 10,
  },
  input: {
    width: "100%", 
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  multiLineInput: {
    width: "100%", 
    height: 100,    
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingTop: 10,  
    textAlignVertical: "top",
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%", //no margin top because its annoying to have to tap off screen
                  // in order to go back or save.
  },
});
