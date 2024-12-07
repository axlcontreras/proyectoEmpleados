let mysql = require("mysql")
console.log(mysql)
console.log("El archivo fue encontrado con exito")
//ejecutamos desde la consola: node js/conexionBD.js

//crear la conexion
//son 4 atributos que creamos para poder decirle que se conecte
//1er metodo, usar createConexion parasarle como parametro un objeto
let conexion = mysql.createConnection({ //se utiliza así con el nombre de la variable asignada 
    //nombre del host 
    host: "localhost",
    //nombre de la base de datos
    database: "proyectoempleados",
    user: "root",
    password: ""
}) 


conexion.connect(function(error){
    if(error){
        throw error //esto sirve para ver si tenemos un error 
    }else{
        console.log("La conexión a BD es exitosa")
    }
})

function consulta(instruccion){
    conexion.query(
        instruccion, (error, data)=>{
            if (error){
                throw error
            }else{
                console.log(`Esta es la instruccion ejecutada ${instruccion}`)
                for (let empleado of data){
                    console.log(empleado.nombre, empleado.apellido, empleado.ciudad)
                }
            }
        }
    )
}

function actualizarEmpleado(actualizar, id){
    conexion.query(
        actualizar, (fail, info)=>{
            if (fail){
                throw fail
            }else{
                console.log(`Se aplicará una intruccion de actualizar: ${actualizar} en empleado ${id}`)
                console.log(info)
            }
        }
    )
}

function insertarEmpleado(nombre, apellido, antiguedad, ciudad){
    const insert = `INSERT INTO empleados (nombre, apellido, antiguedad, ciudad) VALUES ("${nombre}", "${apellido}", "${antiguedad}", "${ciudad}")`
    conexion.query(insert, function(err, resultado){
        if (err){
            throw err
        }else{
            console.log(resultado)
        }
    })


}
 
// insertarEmpleado("Raul", "Simonet", 4, "CABA")
// let instruccionTest = `SELECT * FROM empleados`
// consulta(instruccionTest)
let idActualizar = 9
let instruccionActualizar = `UPDATE empleados SET nombre = 'Axel', Ciudad = 'Buenos Aires'
WHERE id = ${idActualizar};`
actualizarEmpleado(instruccionActualizar, idActualizar)

conexion.end()