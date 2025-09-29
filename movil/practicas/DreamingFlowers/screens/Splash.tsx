import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Splash({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    }, [])
    
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>
                Bienvenidos
            </Text>
            <Image source={{
                uri: 'https://media.sketchfab.com/models/018656337ff64cde8f742001f0a36024/thumbnails/5fe68866e44e4327877183a7e0cff74f/aeabc1348dd44e85b38144335c022edf.jpeg',
            }} 
            style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddcdd'
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20
    },
    titulo: {
        fontFamily: 'Arial',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 10
  }
})