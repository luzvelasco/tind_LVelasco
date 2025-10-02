import { use, useEffect, useState } from "react";
import { Text, TouchableOpacity, View, TextInput, ActivityIndicator, FlatList } from "react-native";

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

    const renderPost = ({ item }) => {
        <TouchableOpacity
            onPress={() => alert('Post seleccionado: ' + item.id)}>
            <Text>
                {item.title}
            </Text>
            <Text>
                {item.body}
            </Text>
        </TouchableOpacity>
    }

    if (loading) {
        return (
            <View>
                <ActivityIndicator />
                <Text>
                    Cargando...
                </Text>
            </View>
        )
    }

    return (
        <View>
            <Text>
                LISTA DE POSTS
            </Text>
            <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    )
}