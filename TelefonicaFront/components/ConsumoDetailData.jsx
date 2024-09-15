import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"
import DataCard from "./DataCard"
import {useLineaTelefonica} from "../store"


export default function ConsumoDetailData({props}){
    let {lineaTelefonica, setLineaTelefonica}    = useLineaTelefonica.getState()
    return (
        <View style={styles.consumo_detail_data_container}>
            <DataCard titulo="Saldo" data={`Bs. ${lineaTelefonica.saldo}`}/>
            <DataCard titulo="Megas" data={`${Number(lineaTelefonica.datos)} MB`} max_data={Number(lineaTelefonica.max_datos)}/>
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
