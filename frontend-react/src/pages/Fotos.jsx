import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import axios from "axios";

function Fotos() {
    const [archivo, setArchivo] = useState(null)
    const [cargando, setCargando] = useState(false)

    const subirFoto = async() => {
        if(!archivo) {
            console.log("no se ha seleccionado una imagen")
            return;
        }
        const datosFormulario = new FormData()
        datosFormulario.append('file', archivo)
        try {
            setCargando(true)
            const respuesta = await axios.post('http://localhost:3000/procesar-foto', datosFormulario, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log("si se pudo (:")
        } catch (error) {
            console.error("hubo un error al subir la imagen", error)
        } finally {
            setCargando(false)
        }
    }

    const cargarArchivo = (event) => {
        setArchivo(event.target.files[0])
    }

    return (
        // useState para manerjar el estado del archivo y el estado de procesado
        <>
            <Header />
            <main>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <h1>Subir foto</h1>
                        <input type="file" onChange={cargarArchivo} />
                        <button onClick={subirFoto} disabled={cargando}>
                            {cargando ? 'Cargando archivo' : 'Subir foto'}
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Fotos;