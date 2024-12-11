const mysql = require("promise-mysql")

const connection = mysql.createConnection({
    host: "localhost",
    database: "proyectoempleados",
    user: "root",
    password: ""
})

const getConnection = async () => await connection

module.exports={
    getConnection
}

//este archivo se crea para exportar el metod getConnection 