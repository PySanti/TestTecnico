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
                {
                    currentLineaList && currentLineaList.length > 1?
                    <Picker selectedValue={currentLinea.numero_movil} onValueChange={handlePickerValueChange} mode="dropdown" style={styles.picker} dropdownIconColor="blue">
                        {currentLineaList.map(element => {
                            return <Picker.Item key={useId()} style={styles.base_text, styles.linea_selection_text} label={element.numero_movil} value={element.numero_movil} />
                        })}
                    </Picker>
                :
                    <Text style={styles.base_text, styles.linea_selection_text}>{currentLinea.numero_movil}</Text>
                }
                <Text style={styles.base_text, styles.linea_selection_subtext}>{currentLinea.plataforma == "POST"? "Postpago" : "Prepago"}</Text>
            </View>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    header : {
        backgroundColor : "#3b98eb",
        width : '100%',
        height : 250,
        alignItems : 'left',
        justifyContent : 'center',
        borderRadius : 20,
        padding : 30,
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
        color : "#000",
        borderRadius : 20,
    },
    linea_selection_subtext:{
        opacity:.5
    },
    picker :{
        width : '100%',
    },
    linea_selection_text_container:{
        alignItems : 'start',
        justifyContent : 'start',
        width : '60%',
    },


});
