import React from "react";
import {Text, StyleSheet, View} from 'react-native'

const StudentsInfoScreen = () => {
    let name = 'drilon';
    let surname = 'latifi';
    const fullName = name + ' ' + surname;
    let birthday = 18;
    let address = 'pejton';
    let city = 'prishtina';
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>hello im {name}</Text>
            <Text style={styles.textStyle}>my surname is {surname}</Text>
            <Text style={styles.textStyle}>my full name is {fullName}</Text>
            <Text style={styles.textStyle}>i am {birthday} years old</Text>
            <Text style={styles.textStyle}>i live in {address}</Text>
            <Text style={styles.textStyle}>i come from {city}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default StudentsInfoScreen;