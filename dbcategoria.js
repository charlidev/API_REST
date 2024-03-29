var config = require('./dbconfig');
const sql = require('mssql');

async function getCategoria(){
    try {
        let pool = await sql.connect(config);
        let categoria = await pool.request().query("SELECT * FROM TM_CATEGORIA");
        return categoria.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategoria : getCategoria
}