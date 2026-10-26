import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to About Screen</Text>
            <Button
                title="Go back to Main Screen"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

// const styles = StyleSheet.create({})

export default About;