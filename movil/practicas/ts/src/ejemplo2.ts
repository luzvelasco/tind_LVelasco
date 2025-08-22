// USO DE ARREGLOS

const calificaciones: number[] = [9, 7, 6, 8, 10];

function obtenerPromedio(listaCalificaciones: number[]): number {

    let suma: number = 0;

    for (let n of listaCalificaciones) {
        suma += n;
    }

    return suma / listaCalificaciones.length;
}

console.log(obtenerPromedio(calificaciones));