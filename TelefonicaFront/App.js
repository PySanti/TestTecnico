import React from "react"
import {Text, View, ScrollView, ActivityIndicator, StyleSheet, Image} from "react-native"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import {useEffect, useState} from "react"
import axios from 'axios'
import {BASE_USER_NAME} from "./constants"
import ErrorMsg from "./components/ErrorMsg"
import {useLineaTelefonica} from "./store"
import {useLineasTelefonicasList} from "./store"


export default function App(){
  let {lineaTelefonica, setLineaTelefonica}    = useLineaTelefonica.getState()
  let {lineasTelefonicasList, setlineasTelefonicasList}    = useLineasTelefonicasList.getState()
  let [errorMsg, setErrorMsg]               = useState(null)
  const handleDefaultCupoRequest = async ()=>{
    try {
      // const response = await axios.get(`http://192.168.1.109:8000/usuarios/${BASE_USER_NAME}/cupos/all`)
      const response = await axios.get(`http://127.0.0.1:8000/usuarios/${BASE_USER_NAME}/cupos/all/`)
      setLineaTelefonica(response.data.cupos_list[0])
      setlineasTelefonicasList(response.data.cupos_list)
      setErrorMsg(false)
    } catch (e){
      setErrorMsg("Error inesperado cargando datos del usuario!")
    }
  }
  useEffect(()=>{
    if (!lineaTelefonica && !errorMsg){
      (async()=>{
          await handleDefaultCupoRequest()
        }
      )();
    }
  }, [])
  return (
    <ScrollView style={styles.base_container}>
        <View style={styles.main_container}>
          {
            !lineaTelefonica && !errorMsg?
            <ActivityIndicator size="large" color="blue"/>
            :
            <>
              {
                errorMsg?
                <ErrorMsg error={errorMsg}/>
                :
                <>
                  <Header />
                  <Content/>
                  <Footer/>
                </>
              }
            </>
          }
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  base_container:{
    flex : 1
  },
  main_container: {
    flex : 1,
    justifyContent : 'start',
    alignItems : 'center',
  },

});
