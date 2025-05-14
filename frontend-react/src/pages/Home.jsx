import { useEffect, useState } from "react"
import Slide from "../components/Slide"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import axios from "axios"

function Home() {

    // HOOKS: funciones propias de react que se pueden reutilizar sin hacerlos desde cero

    // ESTADO: hook de estado cmabia el estado de una variable
    const [florerias, setFlorerias] = useState([])
    console.log(florerias) 

    /*
    const jsonFlorerias = [
        {
            "idfloreria": 1,
            "nombre": "El  girasol",
            "ubicacion": "Av. La Luna",
            "telefono": "9998128712",
            "estatus": 1
        },
        {
            "idfloreria": 2,
            "nombre": "Los tulipanes",
            "ubicacion": "Av. 135",
            "telefono": null,
            "estatus": 1
        },
        {
            "idfloreria": 3,
            "nombre": "La mesa de madera",
            "ubicacion": "Av. Tulum",
            "telefono": "203232323",
            "estatus": 1
        },
        {
            "idfloreria": 4,
            "nombre": "El girasol de Benja",
            "ubicacion": "Av 666",
            "telefono": "1222345",
            "estatus": 1
        }
    ]
    

    // UPDATE SET
    setFlorerias(jsonFlorerias)
    console.log(florerias)
    */
    console.log(florerias)

    // MOSTRAR LA LISTA EN CONSOLA
    /*
    console.log(
        jsonFlorerias.map(e => ({ id: e.idfloreria, nombre: e.nombre }))
    ) */

    // CAMBIA EL ESTADO DE UNA VARIABLE -- detecta un cambio y se ejecuta
    useEffect(() => {
        axios.get('http://localhost:3000/florerias')
        .then(res => {
            setFlorerias(res.data)
        })
        .catch(error => {
            console.error('ha ocurrido un error.')
        })
    },[])

    return (
        <>
            <Header />
            <main>
                <Slide />
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <h1>Las florerias más solicitadas</h1>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                florerias.map((floreria) => (

                                    <div className="col" key={floreria.idFlorerias}>
                                        <div className="card shadow-sm">
                                            <svg
                                                className="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height={225}
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Placeholder: Thumbnail"
                                                preserveAspectRatio="xMidYMid slice"
                                                focusable="false"
                                            >
                                                <title>Placeholder</title>
                                                <rect width="100%" height="100%" fill="#55595c" />
                                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                                    Thumbnail
                                                </text>
                                            </svg>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    {floreria.nombre} <br />
                                                    {floreria.ubicacion} <br />
                                                    {floreria.telefono} <br />
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                                            View
                                                        </button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <small className="text-body-secondary">9 mins</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Home