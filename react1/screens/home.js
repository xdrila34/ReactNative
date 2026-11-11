
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icons from '../components/Icons';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to home screen</Text>

            <Icons
                name="cellphone-iphone"
                iconsText="Iphone"
            />

            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
