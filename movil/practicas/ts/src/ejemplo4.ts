// INTERFACES

interface Arreglos {
    id: number;
    nombre: string;
    precio: number;
}

const productos: Arreglos[] = [
    { id: 1, nombre: "Girasol", precio: 120 },
    { id: 2, nombre: "Lirios", precio: 500 },
    { id: 3, nombre: "Cactus", precio: 300 }
];

// MÉTODO PARA CALCULAR EL TOTAL DE LOS PRECIOS

function calcularTotal(flores: Arreglos[]): number {

    return flores.reduce((total, f) => total + f.precio, 0);

}

console.log('total de ventas: ', calcularTotal(productos))