import React from "react"
import {Text, View, StyleSheet, Image, TouchableOpacity, Linking,} from "react-native"

const iconPaths = {
    tienda : require('../assets/tienda.png'),
    planes: require('../assets/planes.png'),
    club: require('../assets/club.png'),
    contacto: require('../assets/contacto.png'),
};





export default function FooterLink({title, description, icon, url}){
    const handlePress = () => {
        Linking.openURL(url); // URL a la que quieres enlazar
    };
    return (
        <View style={styles.footer_link_container}>
            <TouchableOpacity onPress={handlePress}>
                <Image
                    source={iconPaths[icon]}
                    style={styles.footer_link_icon}
                />
            </TouchableOpacity>
            <Text style={styles.footer_link_title}>{title}</Text>
            <Text style={styles.footer_link_description}>{description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    footer_link_icon :{
        marginBottom : 20
    },
    footer_link_container:{
        padding : 15,
        width : 180,
        height : 160,
        borderWidth : 2,
        borderRadius : 10,
        borderColor : "#ddd",
    },
    footer_link_title :{
        fontSize : 16,
        marginBottom : 5
    },
    footer_link_description :{
        opacity : .4
    }
});
