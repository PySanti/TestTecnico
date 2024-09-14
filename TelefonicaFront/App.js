import React from "react"
import {Text, View, StyleSheet} from "react-native"



export default function App(){
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Hola</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#292929'
  },
  text: {
    fontSize:30,
    color : "#ffffff"
  },
});
