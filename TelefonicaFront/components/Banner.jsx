import React from "react"
import {Text, View, StyleSheet, Image} from "react-native"



export default function Banner({props}){
    return (
        <View style={styles.banner_container}>
            <Image
                source={require('../assets/banner.png')}
                style={styles.banner_img}
                resizeMode="contain"
            />
        </View>
    )
}



const styles = StyleSheet.create({
    banner_container : {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    banner_img : {
        width : "100%"
    },
});
