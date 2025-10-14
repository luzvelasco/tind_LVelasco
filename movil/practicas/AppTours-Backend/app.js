const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc') // npm i swagger-jsdoc
const swaggerUi = require('swagger-ui-express') // npm i swagger-ui-express
const cors = require('cors') // npm i cors
const mysql = require('mysql2') // BD

const app = express()
app.use(express.json())
const port = 3000
const bd = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'v5090L03',
    database: 'agencia'
})

// ------------------------ CONECTAR CON MYSQL ------------------------
bd.connect((error) => {
    if (error) {
        console.log('ERROR al conectar: ' + error.stack)
        return;
    }
    console.log('conectado a mysql [:')
})

// ------------------------ RUTA PARA MOSTRAR TODOS LOS TOURS ------------------------

/**
 * @swagger
 * /tours:
 *  get:
 *   summary: Listado de tours
 *   tags: [Tours]
 *   response:
 *      200:
 *          description: Listado de tours
 */

app.get('/tours', (req, res) => {
    bd.query('SELECT * FROM Tours', (error, results) => {
        if (error) {
            console.log('error al ejecutar la consulta: ' + error.stack)
        }
        res.json(results)
    })
})

app.get('/', (req, res) => {
    res.send('API de App Tours')
})


// ------------------------ CONFIGURAR SWAGGER ------------------------
const swagggerOptions = {
    swaggerDefinition: {
        openapi: '3.1.0',
        info: {
            title: 'API de App Tours',
            version: '1.0.0',
            description: 'API de la app de tours'
        },
    },
    apis: ['*.js'],
}

const swaggerDocs = swaggerJsDoc(swagggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(port, () => {
    console.log('Servidor desde puerto ' + port)
})