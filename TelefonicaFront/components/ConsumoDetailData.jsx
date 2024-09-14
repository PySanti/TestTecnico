import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"
import DataCard from "./DataCard"


export default function ConsumoDetailData({props}){
    return (
        <View style={styles.consumo_detail_data_container}>
            <DataCard titulo="Saldo" data="Bs. 100"/>
            <DataCard titulo="Megas" data="3500 BM"/>
        </View>
    )
}


const styles = StyleSheet.create({
    consumo_detail_data_container :{
        margin : 20,
        flexDirection : "row",
    }
});
