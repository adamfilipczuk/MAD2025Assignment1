import { FlatList, Text, View, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const data = [
    { itemId: "1", title: "Buy milk" },
    { itemId: "2", title: "Buy bread" },
    { itemId: "3", title: "Buy eggs" },
  ];

  // screen dimensions for dynamic sizing
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  //should modify to keep more dynamic for screen changes
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" />
      <View style={styles.container}>
        <Text style={styles.titleText}>My Todo List</Text>
        <View style={styles.topLine}></View>

        {/* Using FlatList instead of copies, makes it easier for later */}
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={[
                styles.box,
                {
                  width: screenWidth * 0.85,
                  height: screenHeight * 0.05,
                },
              ]}
            >
              <Text style={styles.todoListText}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.itemId}
        />

        {/* Bottom margin line */}
        <View style={styles.bottomLine}></View>

        {/* Touch input field*/}
        {/* Is only a view now will need to be changed later*/}
        <View
          style={[
            styles.touchField,
            {
              width: screenWidth * 0.4,
              height: screenHeight * 0.05,
              marginBottom: screenHeight * 0.04, //made for iphone with gesture bar
              marginTop: screenHeight * 0.01,    //will look funny on devices with physical button
            },                                   //needs to be changed
          ]}
          >
            <Text style={styles.buttonText}>Add New Todo</Text>
          </View>
      </View>
    </>
  );
}

//Apple blue: #007AFF
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  todoListText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 18,
    color: "#007AFF",
  },
  topLine: {
    width: "90%",
    height: 2,
    backgroundColor: "black",
    marginVertical: 10,
  },
  bottomLine: {
    width: "90%",
    height: 2,
    backgroundColor: "black",
    marginTop: "auto", // Pushes the bottom line to the bottom of the screen
  },
  box: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "#ADD8E6",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  touchField: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    
  },
});
