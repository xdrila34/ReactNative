import React from "react"; 
import { View, Text, StyleSheet } from "react-native-web";

const StudentScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is the Student Screen</Text>
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