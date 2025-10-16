const mysql = require('mysql2');
require('dotenv').config(); // archivo de configuración creada

// crear pool de conexiones <-- mejora el rendiemiento
const pooldb = mysql.createPool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    port: process.env.BD_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// convertir a promesas para usar aync/await
const promisePoolDb = pooldb.promise();

// Probar la conexión
pooldb.getConnection((error, connection) => {
    if (error) {
        console.error('error conectando a la base de datos: ', error.message);
        return;
    }
    console.log('conexión existosa a la bd');
    connection.release();
});

module.exports = promisePoolDb;