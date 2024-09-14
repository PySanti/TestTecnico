import React from "react"
import {Text, View, ScrollView,StyleSheet, Image} from "react-native"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"


export default function App(){
  return (
    <ScrollView>
      <View style={styles.main_container}>
        <Header/>
        <Content/>
        <Footer/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex : 1,
    justifyContent : 'start',
    alignItems : 'center',
  },

});
