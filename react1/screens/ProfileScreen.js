import React from "react"; 
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
import ProfileDetails from "./ProfileDetails";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is the Profile Screen</Text>
            <ProfileDetails name="Drilon" image={require('../assets/avatar1.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></ProfileDetails>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
});

export default ProfileScreen;