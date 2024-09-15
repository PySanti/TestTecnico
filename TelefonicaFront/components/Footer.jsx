import React from "react"
import {Text, View, StyleSheet, Image, } from "react-native"
import FooterLink from "./FooterLink"


export default function Footer({props}){
    return (
        <View style={styles.footer_container}>
            <View style={styles.footer_title_container}>
                <Text style={styles.footer_title}>Accesos Directos</Text>
            </View>
            <View style={styles.footer_links_container}>
                <FooterLink title="Planes" description="Opciones para ti" icon="planes" url={"https://www.movistar.com.ve/Particulares/planes-movistar-plus.html"}/>
                <FooterLink title="Contáctenos" description="Canales de gestión" icon="contacto" url={"https://www.movistar.com.ve/Particulares/Autogestion.html"}/>
                <FooterLink title="Tienda" description="Compra una linea" icon="tienda" url={"https://tienda.movistar.com.ve/linea-nueva"}/>
                <FooterLink title="Club Movistar" description="Beneficios" icon="club" url={"https://www.movistar.com.ve/Particulares/Antesala_club_movistar.html"}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    footer_title : {
        fontSize : 20,
        fontWeight : "bold"
    },
    footer_container : {
        width : "100%"
    },
    footer_title_container: {
        marginLeft : 20,
    },
    footer_links_container : {
        padding : 20,
        gap : 10,
        justifyContent : 'space-around',
        flexDirection : 'row',
        flexWrap : "wrap",
    }
});
