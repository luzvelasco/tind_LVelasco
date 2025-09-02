import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";

interface Frase {
    id: number;
    quote: string;
    author: string;
}

export default function Basico() {

    // CREAR LOS USESTATE PARA ALMACENAR LAS FRASES, Y OTRO PARA INDICARME CUANDO SE ESTÉ CARGANDO LOS DATOS

    const [frases, setFrases] = useState<Frase[]>([]);
    const [cargando, setCargando] = useState(true);

    // CONSUMO DE API
    useEffect(() => {
        const obtenerFrases = async () => {
            try {
                // consumir la API de Quotes
                const respuesta = await fetch('https://dummyjson.com/quotes');
                const datos = await respuesta.json();
                setFrases(datos.quotes);
            } catch (error) {
                console.error(error);
            } finally {
                setCargando(false);
            }
        }
        obtenerFrases();
    }, [])

    return cargando ? (
        <ActivityIndicator>

        </ActivityIndicator>
    ) : (

        <View style = {styles.container}>
            <Text style = {styles.titulos}>
                Listado de Frases
            </Text>
            <FlatList 
                data={frases}
                renderItem={
                    ({item}) => (
                        <View style = {styles.caja}>
                            <Text style = {styles.frase}>
                                {item.quote}
                            </Text>
                            <Text style = {styles.autor}>
                                — {item.author}
                            </Text>
                        </View>
                    )
                }
                >
                
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create ({
    container : {
        padding: 10
    },
    titulos : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00395dff',
        textAlign: 'center',
        marginBottom: 12
    },
    caja : {
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: '#c3d4ffff',
    },
    frase : {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 2
    },
    autor : {
        padding: 4,
        fontSize: 14,
        textAlign: 'right',
        // fontWeight: 'bold',
        color: '#80007bff',
    }
})