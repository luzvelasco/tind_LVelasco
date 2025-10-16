const swaggerJsDoc = require('swagger-jsdoc') // npm i swagger-jsdoc
const swaggerUi = require('swagger-ui-express') // npm i swagger-ui-express

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
    apis: ['./routes/*.js'], // la carpeta de rutas de swagger
}

const swaggerDocs = swaggerJsDoc(swagggerOptions)

module.exports = {
    swaggerUi,
    swaggerDocs
}