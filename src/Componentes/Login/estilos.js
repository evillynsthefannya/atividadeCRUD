import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#BEB7A4",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem:{
        width: 800, 
        height: 300
    },
    input: {
        height: 50,
        width: "90%",
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },
    botao: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        width: 105,
        height: 40,
        margin: 6,
        borderRadius: 50,
    },
    textoButton: {
        color: 'white', 
    },
    texto: {
        fontSize: 16,
    },
    textoLink:{
        color: 'green',
    },
    rodape: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#BEB7A4',
        padding: 10,
    }
});