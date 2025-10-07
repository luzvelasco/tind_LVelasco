import { use, useEffect, useState } from "react";
import { Text, TouchableOpacity, View, TextInput, ActivityIndicator, FlatList, StyleSheet } from "react-native";

export default function Home({ navigation }) {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.slice(0, 10));
                setLoading(false);
            })
            .catch(error => {
                console.log("detalles del error: ", error);
                setLoading(false);
            });
    }, [])

    console.log(posts)

    const renderPost = ({ item }) => (
        <TouchableOpacity
            // onPress={() => alert('Post seleccionado: ' + item.id)}
            onPress={() => navigation.navigate('Post', { post: item })}>
            <Text
                style={style.tituloPost}>
                {item.title}
            </Text>
            <Text
                numberOfLines={2}
                style={style.descripcionPost}>
                {item.body}
            </Text>
        </TouchableOpacity>
    )

    if (loading) {
        return (
            <View
                style={style.contenedor}>
                <ActivityIndicator />
                <Text>
                    Cargando...
                </Text>
            </View>
        )
    }

    return (
        <View
            style={style.contenedor}>
            <Text
                style={style.titulo}>
                LISTA DE POSTS
            </Text>
            <FlatList
                style={style.listaPosts}
                data={posts}
                renderItem={renderPost}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    )
}

const style = StyleSheet.create({

    contenedor: {
        flex: 1,
        padding: 15,    
        backgroundColor: '#e0a8feff'
        // backgroundColor: '#000000ff'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#ff0202ff',
    },
    listaPosts: {
        flex: 1
    },
    tituloPost: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
        borderRadius: 8,
        // color: '#fbca19ff'
        color: '#2164feff'
    },
    descripcionPost: {
        fontSize: 14,
        color: '#5d00ffff'
        // color: '#19fb3fff'
    }
})