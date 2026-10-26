import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Home from "screens/Home.js";
import About from "screens/About.js";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "orange",
    }
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;