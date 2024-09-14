import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"
import Banner from "./Banner"


export default function Content(){
    return (
    <View style={ styles.second_section}>
        <Banner/>
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
    )
}



const styles = StyleSheet.create({

    second_section : {
        width : '100%',
        paddingTop : 20
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
