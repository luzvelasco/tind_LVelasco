import { View, Text, Button, StyleSheet } from "react-native";

export default function Home({ navigation }: any) {

    return (
        <View>
            <Text style={styles.title}>Bienvenidos</Text>
            <Button
                title="Ver Frases Básicas"
                onPress={() => navigation.navigate("Basico")}
            />
            <Button
                title="Ver Frases Avanzadas"
                onPress={() => navigation.navigate("Avanzado")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    }
})