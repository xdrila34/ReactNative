import React from "react"; 
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import StudentDetalis from "./StudentDetails"; 
const StudentScreen = () => {
    return (
        <View style={styles.container}>
            
            
            <Text style={styles.textStyle}>This is the Student Screen</Text>
            <StudentDetalis name="Drilon" image={require('../assets/avatar1.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></StudentDetalis>
            <StudentDetalis name="Yll" image={require('../assets/avatar2.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></StudentDetalis>
            <StudentDetalis name="Donart" image={require('../assets/avatar4.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></StudentDetalis>
            <StudentDetalis name="Dyll" image={require('../assets/avatar3.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></StudentDetalis>
            <StudentDetalis name="Dronart" image={require('../assets/avatar5.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></StudentDetalis>

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

export default StudentScreen;