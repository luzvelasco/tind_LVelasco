import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        <View>
            <Text>
                Log In
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                onChangeText={setCorreo}>
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder = "constraseña"
                onChangeText={setContrasena}>
            </TextInput>
            <TouchableOpacity
                onPress={verificarLogin}>
                <Text>
                    Ingresar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contendedor: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#dddd',
        marginBottom: 10,
    }
})