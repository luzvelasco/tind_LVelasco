import { TextInput, View, Text, Button } from "react-native";
import React, { useState } from "react";
import Actividad from "./Actividad";


export default function Actividades() {

    // ---------------------- HOOKS --------------------------

    // contenido previo, usando hooks

    const [actividades, setActividades] = useState([
        { id: 1, descripcion: '1a. Catédra de Ingeniería', completado: true },
        { id: 2, descripcion: 'Plática de Servicio Social', completado: false },
        { id: 3, descripcion: 'Baja de materias AGO-DIC 2024', completado: false },
        { id: 4, descripcion: 'Misa', completado: false },
        { id: 5, descripcion: 'Entrega de tarea 1', completado: false }
    ]);

    const [descripcion, setDescripcion] = useState('');

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 25 }}>
                Agenda Universitaria
            </Text>

            <TextInput
                placeholder="Nueva actividad"
                value={descripcion}
                onChangeText={setDescripcion}
            />

            <Button
                title="Agregar Actividad"
                onPress={agregarActividad}
            />

            <Text style={{ fontSize: 20, paddingTop: 10 }}>
                Lista de Actividades
            </Text>

            {actividades.map(elemento => (
                <Text>
                    <Actividad
                        key={elemento.id}
                        actividad={elemento}
                        borrarActividad={borrarActividad}
                        completarActividad={completarActividad}
                    />
                </Text>
            ))}
        </View>
    )

    // ---------------------- MÉTODOS --------------------------

    // método para agregar actividades
    function agregarActividad() {
        const nuevaActividad = { id: Date.now(), descripcion, completado: false };
        setActividades([...actividades, nuevaActividad]);
        setDescripcion('');
    }

    // método para borrar
    function borrarActividad(id) {
        setActividades(actividades.filter(elemento => elemento.id !== id));
    }

    // método para completar actividad
    function completarActividad(id) {
        setActividades(actividades.map(
            elemento => (elemento.id === id ?
                { ...elemento, completado: !elemento.completado }
                :
                elemento
            )
        ));
    }
}