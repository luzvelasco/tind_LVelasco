const express = require('express')
const cors = require('cors') // npm i cors
require('dotenv').config() // npm i dotenv

// archivo de las rutas
const toursRoutes = require('./routes/tours.routes')
// conf de swagger
const  { swaggerUi , swaggerDocs } = require('./swagger')

const app = express();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ------------------------ RUTAS ------------------------

// RUTA PRINCIPAL
app.get('/', (req, res) => {
    res.json({
        message: 'API de Tours - Home',
        version: '1.0.0',
        endpoint: {
            tours: 'api/tours',
            documentation: '/api-docs'
        }
    })
})

// RUTAS DE LA API
app.use('/api/tours', toursRoutes)

// CONFIGURAR SWAGGER
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// RUTAS 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'ruta no encontrada'
    })
})

// ------------------------ MANEJO DE ERRORES ------------------------
app.use((error,req,res,nect)=>{
    console.error(error.stack);
    res.status(500).json({
        success:false,
        message:"Eror interno",
        error:error.message
    })
})

app.listen(port, () => {
    console.log('Servidor desde puerto ' + port)
})