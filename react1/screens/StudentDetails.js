import React from "react";
import {Text, Image, View, StyleSheet} from "react-native"

const StudentDetalis = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View styles={styles.imgWrapper}>
                    <Image source={props.image} style={styles.img}/>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        cardWrapper: {
            backgroundColor: 'white',
            flexDirection: 'row',
            borderRadius: 8,
            alignSelf: 'center',
            marginBottom: 15  
            
        },
        img: {
            width: 100,
            height: 100,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
        },
        infoWrapper: {
            marginLeft: 20,
            marginTop: 20
        },
        name: {
            fontWeight: 'bold',
        }

});

export default StudentDetalis;