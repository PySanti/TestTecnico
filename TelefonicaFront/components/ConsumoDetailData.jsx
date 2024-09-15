import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"
import DataCard from "./DataCard"


export default function ConsumoDetailData({currentLinea}){
    return (
        <View style={styles.consumo_detail_data_container}>
            <DataCard titulo="Saldo" data={`Bs. ${currentLinea.saldo}`}/>
            <DataCard titulo="Megas" data={`${Number(currentLinea.datos)} MB`} max_data={Number(currentLinea.max_datos)}/>
        </View>
    )
}


const styles = StyleSheet.create({
    consumo_detail_data_container :{
        margin : 20,
        gap : 30,
        flexDirection : "row",
    }
});
