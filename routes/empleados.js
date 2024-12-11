const express = require("express");
const router = express.Router();
const database = require ("../config/database");
const link = require("../config/link")


async function insertarEmpleado(nombre, apellido, antiguedad, ciudad){
    const connection = await database.getConnection()
    const insert = `INSERT INTO empleados (nombre, apellido, antiguedad, ciudad, efectivo) VALUES ("${nombre}", "${apellido}", "${antiguedad}", "${ciudad}", "0")`
    connection.query(insert, function(error, row){
        if (error){
            console.error("Error al insertar usuario")
            throw error
        }else{
            console.log("Se insertó usuario correctamente")
            // res.render("empleados", {link})

        }
    })
    connection.query("SELECT * FROM empleados", (error, data)=>{
        if(error){
            throw error
        }else{
            console.log(data)
        }
    })
}

router.get("/empleados", (req, res)=>{
    res.render("empleados")
})

router.post("/cargarEmpleado", async function(req, res){

    const datoNuevoEmpleado = req.body
    let nombre = datoNuevoEmpleado.nombre
    console.log(nombre)
    let apellido = datoNuevoEmpleado.apellido
    console.log(apellido)
    let antiguedad = datoNuevoEmpleado.antiguedad
    console.log(antiguedad)
    let ciudad = datoNuevoEmpleado.ciudad
    console.log(ciudad)
    insertarEmpleado(nombre,apellido,antiguedad,ciudad)
    res.redirect('back')
})



module.exports = router;
