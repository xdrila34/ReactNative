import React from "react";
import {Text, StyleSheet, View} from 'react-native'
import { FlatList } from "react-native-web";

const HobbiesScreen = () => {
    const hobbies = [
        {id: 1, name: 'Football'},
        {id: 2, name: 'Cooking'},
        {id: 3, name: 'Traveling'},
        {id: 4, name: 'Reading'},
    ]; 
    return(
        <View style={styles.container}>
            <FlatList style={styles.flatlist}
                data={hobbies}
                horizontal={false}
                horizontalScrollIndicator={true}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <Text style={styles.studentWrapper}>{item.name} - {item.id}</Text>
                )}
            />

        </View>
    )
}

 

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000000"
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    
  },
  studentWrapper: {
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    },
    stylesflatlist: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }    

}); 
export default HobbiesScreen;