import React from "react"
import {Text, StyleSheet, View, Flatlist} from 'react-native';

const students = [
    {name: 'Germanuim', surname: 'Morina', age: 30}
    {name: 'Drilon', surname: 'Latifi', age: 18}
    {name: 'Yll', surname: 'Berisha', age: 18}
    


]
const ListScreen = () => {
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.textStyle}>
                list of students
            </Text>
            <Flatlist
                data = {students}
                horizonal = {true}
                showHorizontalScrollIndicat = {false}
                renderItem = {({item}) => {
                    return <Text style={styles.studentWrapper}>{item.name} - {item.age}</Text>
                }}
            />
            

        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  studentWrapper: {
    fontSize: 20,
    marginRight: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: 300,
  }
});

export default ListScreen;  