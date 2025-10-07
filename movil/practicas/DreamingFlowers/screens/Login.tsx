import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";

export default function Login({navigation}) {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const verificarLogin = () => {
        if (correo === 'admin@email.com' && contrasena === '123') {
            navigation.replace('Home')
        } else {
            console.log('error de acceso')
        }
    }

    return (
        <ScrollView style={styles.contenedor}>
            <Text
                style={styles.titulo} >
                Log In
            </Text>
            <TextInput
                style={styles.input}
                placeholder="correo electrónico"
                onChangeText={setCorreo}>
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder = "contraseña"
                onChangeText={setContrasena}>
            </TextInput>
            <TouchableOpacity
                style={styles.boton}
                onPress={verificarLogin}>
                <Text
                    style={styles.botonTexto}>
                    Ingresar
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        // justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#be0000ff',
    },
    input: {
        borderWidth:1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        fontSize: 16,
    },
    boton: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    botonTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})