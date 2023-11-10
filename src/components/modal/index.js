import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

export function ModalPassword( {password, handleClose}) {
    return(
        <View style={style.container}>

            <View style={style.content}>

                <Text style={style.title}>Senha gerada</Text>

                <Pressable style={style.innerPassword}>
                    <Text style={style.text}>{password}</Text>
                </Pressable>

                <View style={style.buttonArea}>
                    
                    <TouchableOpacity style={style.button} onPress={handleClose}>
                        <Text style={style.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.button, style.buttonSave]}>
                        <Text style={style.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>

        </View>
    )
}

const style = StyleSheet.create({

    container:{
        backgroundColor: "rgba(34, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    title:{
        fontSize: 20,
        fontWeight:"bold",
        color:"#000",
        marginBottom: 24,
    },

    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },

    text:{
        color: "#FFF",
        textAlign: "center",
    },

    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",

    },

    button:{
        flex:1,
        alignItems: "center",
        marginTop: 17,
        marginBottom: 17,
        padding: 8,

    },

    buttonSave:{
        backgroundColor: "#392de2",
        borderRadius: 8,

    },

    buttonSaveText:{
        color: "#FFF",
        fontWeight: "bold"
    }


})