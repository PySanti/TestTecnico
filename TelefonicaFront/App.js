import React from "react"
import {Text, View, ScrollView, ActivityIndicator, StyleSheet, Image} from "react-native"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import {useEffect, useState} from "react"
import axios from 'axios'
import {BASE_USER_NAME} from "./constants"
import ErrorMsg from "./components/ErrorMsg"


export default function App(){
  let [lineaTelefonica, setLineaTelefonica]                = useState(null)
  let [lineasTelefonicasList, setLineasTelefonicasList]    = useState([])
  let [errorMsg, setErrorMsg]               = useState(null)
  const handleDefaultCupoRequest = async ()=>{
    try {
      const response = await axios.get(`http://192.168.1.109:8000/usuarios/${BASE_USER_NAME}/cupos/all`)
      // const response = await axios.get(`http://127.0.0.1:8000/usuarios/${BASE_USER_NAME}/cupos/all/`)
      setLineasTelefonicasList([...response.data.cupos_list])
      setLineaTelefonica(response.data.cupos_list[0])
    } catch (e){
      setErrorMsg("¡ Error inesperado, inténtalo de nuevo mas tarde !")
    }
  }
  useEffect(()=>{
    if (!lineaTelefonica && !errorMsg){
      (async()=>{ await handleDefaultCupoRequest() })();
    }
  }, [])
  return (
    <ScrollView style={styles.base_container}>
        <View style={((!lineaTelefonica && !errorMsg) || errorMsg)? styles.unloaded_main_continer : styles.main_container}>
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
                  <Header  currentLineaState={[lineaTelefonica, setLineaTelefonica]} currentLineaListState={[lineasTelefonicasList, setLineasTelefonicasList]}/>
                  <Content currentLinea={lineaTelefonica}/>
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
    flex : 1,
  },
  main_container: {
    flex : 1,
    justifyContent : 'start',
    alignItems : 'center',
    height : '100%'
  },
  unloaded_main_continer:{
    height : 800,
    justifyContent : 'center',
    alignItems : 'center',
  }
});
