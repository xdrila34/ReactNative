import React from "react";
import {Text, StyleSheet, View} from 'react-native'

const ExersciseScreen = () => {
    let message = 'hi there';
    message = 'prsh prej nameku'
    return(
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>
    )
}

export default ExersciseScreen;