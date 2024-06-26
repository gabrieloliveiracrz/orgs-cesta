import React from 'react'

import topo from "../../../../assets/topo.png";
import Texto from '../../../components/Texto';
import { Dimensions, Image, StyleSheet } from 'react-native';

const widht = Dimensions.get('screen').width;

const Topo = ({ titulo }) => {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * widht,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
})

export default Topo