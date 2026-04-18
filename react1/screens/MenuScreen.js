import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const MenuScreen = (props) => {
    console.log(props)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To Menu Screen</Text>
        <Button
          title="Go to listscreen"
          onPress={() => props.navigation.navigate("Hobbies")}
        />
            <Button
            title="Go back"
            onPress={() => props.navigation.goBack()}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("Profile")}
            >
            <Text style={styles.btnText}>Go to Profile</Text>
            </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  btnText:{
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  }
});

export default MenuScreen;