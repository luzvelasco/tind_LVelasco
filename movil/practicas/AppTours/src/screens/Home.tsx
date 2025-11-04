import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { API_URL } from "../types/navigation";
import { useEffect, useState } from "react";
import { Tour } from "../types/data";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {

    const URL = API_URL + '/tours';

    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState<Tour[]>([]);
    const [error, setError] = useState<string | null>(null);

    const Item = ({ nombre }: Tour) => (
        <TouchableOpacity>
            <Text>{nombre}</Text>
        </TouchableOpacity>
    )

    useEffect(() => {
        const loadTours = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: no se pudo conectar con la api`);
                }

                const dataTours: Tour[] = await response.json();
                setTours(dataTours.data);
            } catch (err: any) {
                setError('Error al cargar los tours: ' + err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadTours();
    }, []);

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#ff00b3ff" />
                <Text>Cargando tours...</Text>
            </View>
        );
    }

    // si hay error
    if (error) {
        return (
            <View>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text>
                    Tours
                </Text>
                <FlatList
                    data={tours}
                    renderItem={({ item }) => <Item nombre={item.nombre} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        padding: 20,
        textAlign: 'center',
    }
})