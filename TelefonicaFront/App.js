import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"



export default function App(){
  return (
  <View style={styles.main_container}>
    <View style={styles.section, styles.header}>
      <Text style={styles.base_text}>¡Hola, usuario!</Text>
      <View style={styles.linea_selection}>
        <View style={styles.inner_linea_selection}>
          <Image
            source={require('./assets/movil.png')}
            style={styles.header_icon_r}
          />
          <Text style={styles.base_text, styles.linea_selection_text}>Datos de la linea</Text>
        </View>
        <Image
          source={require('./assets/actions.png')}
          style={styles.header_icon_r}
        />
      </View>
    </View>
    <View style={styles.section, styles.second_section}>
      <View style={styles.banner_container}>
        <Image
          source={require('./assets/banner.png')}
          style={styles.banner_img}
        />
      </View>
      <View style={styles.datos_linea}>
        <View style={styles.datos_linea_title_container}>
          <Text style={styles.datos_linea_title_container_title}>
            Detalles de tus consumos
          </Text>
          <Text style={styles.datos_linea_title_container_subtitle}>
            Tu fecha de corte es el ...
          </Text>
        </View>
        <View style={styles.datos_linea_data}>

        </View>
      </View>
    </View>
    <View style={styles.section, styles.third_section}></View>
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
  header : {
    backgroundColor : "#3b98eb",
    width : '100%',
    height : 250,
    alignItems : 'left',
    justifyContent : 'center',
    borderRadius : 20,
    padding : 30,
  },
  base_text : {
    color : "#fff",
    fontSize : 18,
    marginBottom : 20
  },
  linea_selection : {
    backgroundColor : "#fff",
    width : "100%",
    height : 80,
    borderRadius : 10,
    padding : 10,
    justifyContent : 'space-between',
    alignItems : 'center',
    flexDirection : 'row'
  },
  inner_linea_selection : {
    alignItems : 'center',
    flexDirection : 'row'
  },
  linea_selection_text : {
    color : "#000"
  },
  banner_container : {
    marginTop : 20,
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center'
  },
  banner_img : {
    width : 350
  },
  second_section : {
    width : '100%'
  },
  datos_linea_title_container_title : {
    fontSize : 18,
    fontWeight: 'bold',

  },
  datos_linea_title_container_subtitle:{
    fontSize : 14,
    color : "#999"
  },
  datos_linea_title_container :{
    margin : 20
  }
});
