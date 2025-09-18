import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
                placeholder="Correo electrónico"
                onChangeText={setCorreo}>
            </TextInput>
            <TextInput
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