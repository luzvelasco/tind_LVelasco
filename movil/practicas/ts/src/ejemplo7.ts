// CONSUMIR API

// https://dummyjson.com/quotes

interface Frase {
    id: number;
    descripcion: string;
    autor: string;
}

async function obtenerFrases(): Promise<Frase[]> {

    const respuesta = await fetch('https://dummyjson.com/quotes');

    if (!respuesta.ok) {
        throw new Error("Error en la petición de datos")
    }

    const datos:Frase[] = await respuesta.json();

    // verificar que sólo se obtenga la frase y el autor
    if (Array.isArray((datos as any).quotes)) {
        return (datos as any).quotes as Frase[]
    }
    
    throw new Error("Formato incorrecto de la API")
}

obtenerFrases().then(frases => {
    console.log(frases.slice(0,10));
})