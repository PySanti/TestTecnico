import React from "react"
import {Text, View, StyleSheet, Image, } from "react-native"




export default function ErrorMsg({error}){
    return (
        <View style={styles.error_msg_container}>
            <Text style={styles.error_msg}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
});
