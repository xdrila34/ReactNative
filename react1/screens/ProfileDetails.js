import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

const ProfileDetails = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        
        <Image source={props.image} style={styles.img} />

        {/* White info box */}
        <View style={styles.infoBox}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>

        {/* Green button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hire Me</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },

  cardWrapper: {
    position: "relative",
    alignItems: "center",
    marginBottom: 140, // space for overlap elements
  },

  img: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },

  infoBox: {
    position: "absolute",
    bottom: -100,

    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    width: 200,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  button: {
    position: "absolute",
    bottom: -130,
    left: "50%",
    transform: [{ translateX: -50 }],

    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  name: {
    fontWeight: "bold",
    marginBottom: 4,
  },

  description: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default ProfileDetails;