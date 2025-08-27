// FUNCIONES CON INTERFACES

interface Estudiante {
    id: number;
    nombre: string;
    becado: boolean;
}

// CREAR EL ARREGLO DE ESTUDIANTES
const estudiantes: Estudiante[] = [
    { id: 1, nombre: "Fernando", becado: false },
    { id: 2, nombre: "Alexis", becado: true },
    { id: 3, nombre: "María", becado: true }
]

// CREAR LA FUNCIÓN PARA BUSCAR ESTUDIANTES BECADOS
function buscarBecados(lista: Estudiante[]): Estudiante[] {
    return lista.filter(lista => lista.becado);
}

// MOSTRAR LISTA DE BECADOS
console.log('Estudiantes becados: ', buscarBecados(estudiantes));