const { Client } = require('pg')
const { user, password, host, port, database } = require('./config');//importamos las configuraciones

//Definimos las propiedades de conexión
const client = new Client({
    user: user,
    password: password,
    host: host,
    port: port,
    database: database,
})    

//Hacemos la conexión 
client.connect(err => {
    //mandamos un mensaje en caso de errores
    if (err) {
        console.error('error al conectar', err.stack)
    } else {
        console.log('Conexión exitosa')
    }
})

//Exportamos
module.exports = { client };    