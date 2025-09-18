import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Splash({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    }, [])
    
    return (
        <View>
            <Text>
                Bienvenidos
            </Text>
        </View>
    )
}