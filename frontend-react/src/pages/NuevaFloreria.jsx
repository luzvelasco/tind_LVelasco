import { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function NuevaFloreria() {
    const [floreria, setFloreria] = useState({
        nombre: '',
        ubicacion: '',
        telefono: ''
    })

    const capturaDatos = (e) => {
        const { name, value } = e.target;
        setFloreria(
            {
                ...floreria,
                [name]: value
            }
        )
    }
    const limpiarForm = (e) => {
        e.preventDefault();
        setFloreria({
            nombre: '',
            ubicacion: '',
            telefono: ''
        })
    }
    const guardarFloreria = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/guardarFloreria', floreria)
            .then(response => {
                console.log(response.data)
                mostrarMensaje(response.data, 'success')
            })
            .catch(error => {
                console.error(error)
                mostrarMensaje(error, 'error')
            })
    }
    const mostrarMensaje = (mensaje, tipo) => {
        withReactContent(Swal).fire ({
            title: mensaje,
            icon: tipo,
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <>
            <Header />
            <main>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <h1>Nueva floreria</h1>
                        <form onSubmit={guardarFloreria}>
                            <div className="mb-3">
                                <label className="form-label">Nombre de la floreria</label>
                                <input type="text" name="nombre" className="form-control" placeholder="Ingresar un nombre" required
                                    value={floreria.nombre} onChange={capturaDatos} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ubicación</label>
                                <input type="text" name="ubicacion" className="form-control" placeholder="Ingresar una ubicación" required
                                    value={floreria.ubicacion} onChange={capturaDatos} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input type="text" name="telefono" className="form-control" placeholder="Ingresar un número telefónico" required
                                    value={floreria.telefono} onChange={capturaDatos} />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Guardar</button>
                                <button onClick={limpiarForm} type="reset" className="btn btn-secondary">Limpiar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}