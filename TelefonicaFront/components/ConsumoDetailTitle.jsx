import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"

export default function ConsumoDetailTitle({props}){
    return (
        <View style={styles.datos_linea_title_container}>
            <Text style={styles.datos_linea_title_container_title}>
                Detalles de tus consumos
            </Text>
            <Text style={styles.datos_linea_title_container_subtitle}>
                Tu fecha de corte es el ...
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    datos_linea_title_container_title : {
        fontSize : 18,
        fontWeight: 'bold',
    },
    datos_linea_title_container_subtitle:{
        fontSize : 14,
        opacity : .5
    },
    datos_linea_title_container :{
        margin : 20
    }
});
