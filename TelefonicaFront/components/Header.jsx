import React from "react"
import {Text, View, StyleSheet,  Image} from "react-native"
import {BASE_USER_NAME} from "../constants"
import {useLineaTelefonica} from "../store"
import {useEffect} from "react"



export default function Header(){
    let {lineaTelefonica, setLineaTelefonica}    = useLineaTelefonica.getState()

    return (
    <View style={ styles.header}>
        <Text style={styles.base_text}>¡Hola, {BASE_USER_NAME.split(" ")[0]}!</Text>
        <View style={styles.linea_selection}>
            <View style={styles.inner_linea_selection}>
                <Image
                    source={require('../assets/movil.png')}
                    style={styles.header_icon_r}
                />
                <View style={styles.linea_selection_text_container}>
                    <Text style={styles.base_text, styles.linea_selection_text}>{lineaTelefonica.numero_movil}</Text>
                    <Text style={styles.base_text, styles.linea_selection_subtext}>{lineaTelefonica.plataforma == "POST"? "Postpago" : "Prepago"}</Text>
                </View>
            </View>
            <Image
            source={require('../assets/actions.png')}
            />
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
    linea_selection_subtext:{
        opacity:.5
    }

});
