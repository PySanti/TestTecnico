import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"

const iconPaths = {
    saldo: require('../assets/saldo.png'),
    megas: require('../assets/megas.png'),
};



export default function DataCard({titulo, data}){
    return (
        <View style={styles.data_card}>
            <Text style={styles.data_card_title}>{titulo}</Text>
            <Text style={styles.mid_text}>Te quedan</Text>
            <Image
                source={iconPaths[titulo.toLowerCase()]}
                style={styles.banner_img}
            />
            <Text style={styles.data}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    data_card :{
        marginLeft : 20,
        width : 130,
        height : 200,
        borderWidth : 2,
        borderRadius : 20,
        borderColor : "#aaa",
        alignItems : 'center',
        paddingTop : 10
    },
    data_card_title : {
        fontSize : 15,
        fontWeight : "bold",
        marginBottom : 5
    },
    mid_text : {
        color : "#888",
        marginBottom : 30
    },
    data : {
        marginTop : -15
    }

});
