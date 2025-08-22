//  FUNCIONES TIPADAS

function escribirTexto(textito: string, cantidad: number): string[] {

    const resultado: string[] = [];

    for (let i = 0; i < cantidad; i++) {
        
        resultado.push(textito);

    }

    return resultado;
}

console.log(escribirTexto('brainrot', 10));