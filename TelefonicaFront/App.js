import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"
import Header from "./components/Header"
import Content from "./components/Content"


export default function App(){
  return (
  <View style={styles.main_container}>
    <Header/>
    <Content/>
    <View style={styles.third_section}></View>
  </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex : 1,
    justifyContent : 'start',
    alignItems : 'center',
    backgroundColor : '#fff'
  },

});
