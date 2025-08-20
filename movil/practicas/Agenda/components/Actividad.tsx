import { View } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native";

export default function Actividad({ actividad, borrarActividad, completarActividad }) {
    return (
        <View>
            <Text style = {{ textDecorationLine: actividad.completado ? 'line-through' : 'none' }} >
                {actividad.descripcion}
            </Text>
            <Button
                title = {actividad.completado ? 'completado' : 'sin completar'}
                onPress = {() => completarActividad(actividad.id)}
            />
            <Button title="Eliminar" onPress={() => borrarActividad(actividad.id)} />
        </View>
    );
}