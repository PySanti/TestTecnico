import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"
import Banner from "./Banner"
import ConsumoDetailTitle from "./ConsumoDetailTitle"
import ConsumoDetailData from "./ConsumoDetailData"


export default function Content(){
    return (
    <View style={ styles.content_section}>
        <Banner/>
        <View style={styles.datos_linea}>
            <ConsumoDetailTitle/>
            <ConsumoDetailData/>
        </View>
    </View>
    )
}



const styles = StyleSheet.create({
    content_section : {
        width : '100%',
        paddingTop : 20
    },

});
