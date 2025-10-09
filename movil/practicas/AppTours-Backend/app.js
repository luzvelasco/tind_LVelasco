const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('API de App Tours')
})

app.listen(port, () => {
    console.log('Servidor desde puerto ' + port)
})