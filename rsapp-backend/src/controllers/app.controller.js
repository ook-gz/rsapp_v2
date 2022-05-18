const { client } = require('../config/bd');
//Importamos el manejador de errores
const { manejadorErrores } = require('../helpers/hndlrErrores');

const appIndex = async (req, res) => {
    res.json({
        error: null,
        data: {
            user: req.user
        }
    })
}
//Items
const listarItems = async (req, res) => {
    try {
        const resultado = await client.query('select * from items');

        //imprimimos mensaje de error
        if (resultado.rows.length === 0){
            return manejadorErrores(res, 'No se han encontrado items');
        }

        //devolvemos lo que se haya encontrado    
        const items = resultado.rows;
        //Lo enviamos en un JSON
        res.json({
            items
        });

    } catch (error) {
       return manejadorErrores(res, error)
    }
}

const añadirItems = async (req, res) => {
    try {
        const { nm_item, cantidad_exist } = req.body;  
        const text = 'insert into items(nm_item, cantidad_exist) values($1, $2) RETURNING *';
        const values = [nm_item, cantidad_exist];
        
        const res = await client.query(text, values);
        console.log(res.rows[0]);
        
    } catch (err) {
        manejadorErrores(res, err.stack)
    }
}

//Forms

module.exports = {
    appIndex, listarItems, añadirItems
}