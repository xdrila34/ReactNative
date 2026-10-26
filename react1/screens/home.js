import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to home screen</Text>
            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
}

// const styles = StyleSheet.create({})

export default Home;