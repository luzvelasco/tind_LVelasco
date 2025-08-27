// EJEMPLO CRUD --> 4 operaciones basicas que todo catalogo debe tener 
// CREATE, READ, UPDATE, DELETE

interface Estudiante {
    id: number;
    nombre: string;
}

// ARREGLO VACÍO PARA RELLENAR 

let estudiantes: Estudiante[] = [];

// ------------- FUNCIONES PARA CADA OPERACIÓN ----------------

// CREATE
function crearEstudiante(alumno: Estudiante): void {
    estudiantes.push(alumno);
    console.log(`Estudiante nuevo: ${alumno.nombre}`);
} 

// MOSTRAR LISTA DE ESTUDIANTES
function mostrarEstudiantes(): void {
    console.log("Lista de estudiantes: ", estudiantes)
}

// ACTUALIZAR UN ESTUDIANTE
function actualizarEstudiante(id: number, nuevoNombre: string): void {
    const estudiante = estudiantes.find(alumno => alumno.id === id);

    if (estudiante) {
        estudiante.nombre = nuevoNombre;
        console.log("Estudiante actualizado");
    } else {
        console.log("No existe el estudiante con id: ", id);
    }
}

// ELIMINAR UN ESTUDIANTE
function eliminarEstudiante(id: number): void {
    estudiantes = estudiantes.filter(alumno => alumno.id  !== id);
    console.log("Estudiante eliminado")
}

// IMPLEMENTAR LA FUNCIÓN CREATE
crearEstudiante({ id: 1, nombre: "Mario" });
crearEstudiante({ id: 2, nombre: "Robert Charñs" });
mostrarEstudiantes();

// IMPLEMENTAR LA FUNCIÓN UPDATE
actualizarEstudiante(1, "Seija")
actualizarEstudiante(3, "lol")

// IMPLEMENTAR LA FUNCIÓN DELETE
eliminarEstudiante(2);
mostrarEstudiantes();