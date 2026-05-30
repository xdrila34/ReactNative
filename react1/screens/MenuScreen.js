import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const MenuScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Welcom To Menu Screen</Text>
            <Button 
                title="Go to List Screen"
                onPress={()=> props.navigation.navigate('List')}
            />
            <TouchableOpacity
                style = {styles.btn}
                onPress={() => props.navigation.navigate('Students')}>
                <Text style={styles.btnText}>Go to Students Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.btn}
                onPress={() => props.navigation.navigate('Profile')}>
                <Text style={styles.btnText}>Go to Profile Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.btn}
                onPress={() => props.navigation.navigate('Countries')}>
                <Text style={styles.btnText}>Go to Countries Screen</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
    btn: {
        backgroundColor: '#3346eb',
        marginVertical: 10,
        paddingVertical: 7
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});


export default MenuScreen;