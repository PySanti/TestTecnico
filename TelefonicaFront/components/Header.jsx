import React from "react"
import {Text, View, StyleSheet,  Image} from "react-native"
import {BASE_USER_NAME} from "../constants"
import {useId, useEffect, useState} from "react"
import {Picker} from '@react-native-picker/picker';


export default function Header({currentLineaState, currentLineaListState}){
    const [currentLinea, setCurrentLinea]           = currentLineaState
    const [currentLineaList, setCurrentLineaList]   = currentLineaListState
    const handlePickerValueChange = (itemValue, itemIndex) => setCurrentLinea(currentLineaList[itemIndex])
    return (
    <View style={ styles.header}>
        <Text style={styles.base_text}>¡Hola, {BASE_USER_NAME.split(" ")[0]}!</Text>
        <View style={styles.linea_selection}>
            <Image source={require('../assets/movil.png')} style={styles.header_icon_r} />
            <View style={styles.linea_selection_text_container}>
                <Picker itemStyle={styles.base_text, styles.linea_selection_text}selectedValue={currentLinea.numero_movil} onValueChange={handlePickerValueChange} mode="dropdown" style={styles.picker} dropdownIconColor="#32b9fc">
                    {currentLineaList.map(element => {
                        return <Picker.Item key={useId()}  label={element.numero_movil} value={element.numero_movil} />
                    })}
                </Picker>
                <Text style={styles.base_text, styles.linea_selection_subtext}>{currentLinea.plataforma == "POST"? "Postpago" : "Prepago"}</Text>
            </View>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    header : {
        backgroundColor : "#32b9fc",
        width : '100%',
        height : 250,
        alignItems : 'left',
        justifyContent : 'center',
        borderRadius : 20,
        padding : 20,
        paddingTop : 40,
        marginTop : -10
    },
    base_text : {
        color : "#fff",
        fontSize : 18,
        marginBottom : 20
    },
    linea_selection : {
        backgroundColor : "#fff",
        width : "100%",
        height : 90,
        borderRadius : 10,
        padding : 10,
        justifyContent : 'start',
        alignItems : 'center',
        flexDirection : 'row',
    },

    linea_selection_text : {
        color : "#aaa",
        borderRadius : 20,
        textAlign : 'left'
    },
    linea_selection_subtext:{
        opacity:.5,
        marginLeft : 18
    },
    picker :{
        width : '100%',
    },
    linea_selection_text_container:{
        alignItems : 'start',
        justifyContent : 'start',
        width : '80%',
    },


});
