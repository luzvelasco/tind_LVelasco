import { StyleSheet, Text, View } from "react-native";

export default function Post({route}) {

    const {post} = route.params;

    return (
        <View
            style={style.contenedor}>
            <View
                style={style.post}>
                <Text
                    style={style.identificador}>
                    Post #{post.id}
                </Text>
                <Text
                    style={style.tituloPost}>
                    {post.title}
                </Text>
                <Text
                    style={style.descripcionPost}>
                    {post.body}
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 15,
        backgroundColor: '#d0d0d0ff',
    },
    post: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#000000ff'
    },
    tituloPost: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        borderRadius: 8,
        color: '#2164feff',
        // letterSpacing: 0.5,
    },
    descripcionPost: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 24,
        color: '#fbca19ff'
    },
    identificador: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        letterSpacing: 1,
        color: '#ff0000ff',
        // textAlign: 'center',
    }
})