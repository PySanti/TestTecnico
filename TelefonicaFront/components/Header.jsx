import React from "react"
import {Text, View, StyleSheet,  Image} from "react-native"



export default function Header(){
    return (
    <View style={ styles.header}>
        <Text style={styles.base_text}>¡Hola, usuario!</Text>
        <View style={styles.linea_selection}>
            <View style={styles.inner_linea_selection}>
                <Image
                    source={require('../assets/movil.png')}
                    style={styles.header_icon_r}
                />
                <Text style={styles.base_text, styles.linea_selection_text}>Datos de la linea</Text>
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

});
