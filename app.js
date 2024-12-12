//EXPRESS

//importamos libreria
const express = require("express")
const app = express()
const database = require ("./config/database")
const cors = require("cors") 


//use para poder tomar los datos --tambien esta la opcion de usar bodyParser
app.use(express.json())
app.use(express.urlencoded({extended:false})) //no sirve para contener los datos que recibimos desde html
app.set("view engine", "ejs"); //permitir utilizar el motor de vistas
app.use(express.static('public')); //public es la carpeta en la cual estarian todos los archivos html, js, etc


//**********************ROUTES**********************************
app.use(require("./routes/index"));
app.use(require("./routes/empleados"));
// app.use(require("./routes/cargarEmpleado"));


//0btener una ruta
//dos parametros, una ruta y una function
// app.get("/", function(req, res){
//     res.render("index")    //.send nos permite mostrar en el html
// })
 
// app.get("/empleados", (req, res)=>{
//     res.render("empleados")
// })

app.get("/contratos", (req, res)=>{
    res.render("contrataciones")
})

app.get("/empresas", (req, res)=>{
    res.render("empresas")
})





//usar metodo para form de index
app.post("/cargarInfo2", function(req, res){
    // console.log(req)
    const datos = req.body
    console.log(datos)
})

// app.post("/cargarEmpleado", async function(req, res){

//             const datoNuevoEmpleado = req.body
//             let nombre = datoNuevoEmpleado.nombre
//             console.log(nombre)
//             let apellido = datoNuevoEmpleado.apellido
//             console.log(apellido)
//             let antiguedad = datoNuevoEmpleado.antiguedad
//             console.log(antiguedad)
//             let ciudad = datoNuevoEmpleado.ciudad
//             console.log(ciudad)
//             // insertarEmpleado(nombre,apellido,antiguedad,ciudad)
//             res.render("empleados", ) //de esta manera se cargan todos los empleados.
            
//         }
//     )

app.post("/actualizarEmpleado", async function(req, res){
    console.log(req)
    const datosActualesEmpleado = req.body
    console.log(datosActualesEmpleado)
    let id = datosActualesEmpleado.id
    console.log(id)
    let nombre = datosActualesEmpleado.nombre
    console.log(nombre)
    let apellido = datosActualesEmpleado.apellido
    console.log(apellido)
    let antiguedad = datosActualesEmpleado.antiguedad
    console.log(antiguedad)
    let ciudad = datosActualesEmpleado.ciudad
    console.log(ciudad)
    actualizarEmpleado(nombre, apellido, antiguedad, ciudad, id)
       
    res.render("empleados")
}) 

app.post("/eliminarEmpleado", async function (req, res) {
    const empleado = req.body
    eliminarEmpleado(empleado.id, res)
    
})
    
app.post("/contrataciones/confirmar", async(req, res)=>{
        const connection = await database.getConnection();
        let contrato = req.body; //capturamos el body para obtener el numero de contrato y asignarlo a los empleados
        let empleadosEfectivizar = req.body.empleadosAsignados; //Lo capturamos de esta manera porque req.body nos devuelve arraycontrat
        console.log(empleadosEfectivizar)
        actualizarEfectivos(empleadosEfectivizar, contrato.id);

        if(req.body && req.body.length > 0){
            return res.sendStatus(400)
        }
        res.sendStatus(200)
})









//listen para activar la conexion 
//dos parametros, el 1ro el host, el 2do una function que se puede utilizar para visualizar en console
const puerto = 3000
app.listen(puerto, ()=>{
    console.log(`Conexion en el port http://localhost:3000`)

})

//.get para traernos info de la DB
app.get("/empleadosDB", async  (req, res)=>{
            const connection = await database.getConnection()
            const result = await connection.query(`select * from empleados`)
            res.json(result)
        }
)

//.get para traernos todos los empleados que no esten contratados
app.get("/empleadosNoEfectivos", async  (req, res)=>{
            const connection = await database.getConnection()
            const result = await connection.query(`select * from empleados where efectivo = "0"`)
            res.json(result)
            console.log(result)
        }
)



//********************************FUNCIONES *******************/

//funcion que retorna si el empleado esta efectivo o no
function consultaEfectivo(id){
    let efectivo = false;
    const consulta = ``
    connection.query(
        instruccion, (error, data)=>{
            if (error){
                throw error
            }else{
                console.log(`Esta es la instruccion ejecutada ${instruccion}`)
                for (let empleado of data){
                    console.log(empleado.id, empleado.nombre, empleado.apellido, empleado.ciudad)
                }
            }
        }
    )
}

//esta funcion realiza la tarea de actualizar el estado(contratado o no), el contrato y las horas asignadas a los empleados que se confirmaron en el contrato. 
async function actualizarEfectivos(array, idContrato){
    const connection = await database.getConnection();
    for(let empleado of array){
        const actualizar = `UPDATE empleados SET efectivo = '1' WHERE empleados.id = ${empleado.id};`
        const asignarContrato = `UPDATE empleados SET contrato = ${idContrato} WHERE empleados.id = ${empleado.id}`
        const actualizarHoras = `UPDATE empleados SET horas = ${empleado.cantHoras} WHERE empleados.id = ${empleado.id}`
        connection.query(actualizar, (err, info)=>{
                if (err){
                    throw err
                }else{
                    console.log(`Se aplicará:  ${actualizar} en empleado ${empleado.id}`)
                    console.log(info)
                }
        })
        connection.query(asignarContrato, (err, info)=>{
            if (err){
                throw err
            }else{
                console.log(`Se aplicará:  ${asignarContrato} en empleado ${empleado.id}`)
                console.log(info)
            }
        })
        connection.query(actualizarHoras, (err, info)=>{
            if (err){
                throw err
            }else{
                console.log(`Se aplicará:  ${actualizarHoras} en empleado ${empleado.id}`)
                console.log(info)
            }
        })

    }
}

// async function insertarEmpleado(nombre, apellido, antiguedad, ciudad){
//     const connection = await database.getConnection()
//     const insert = `INSERT INTO empleados (nombre, apellido, antiguedad, ciudad, efectivo) VALUES ("${nombre}", "${apellido}", "${antiguedad}", "${ciudad}", "0")`
//     connection.query(insert, function(err, resultado){
//         if (err){
//             throw err
//         }else{
//             console.log(resultado)
//         }
//     })
//     connection.query("SELECT * FROM empleados", (error, data)=>{
//         if(error){
//             throw error
//         }else{
//             console.log(data)
//         }
//     })
// }

async function actualizarEmpleado(nombre, apellido, antiguedad, ciudad, id){
    const connection = await database.getConnection()
    const update = `UPDATE empleados SET nombre = "${nombre}", apellido = "${apellido}", antiguedad = "${antiguedad}", ciudad = "${ciudad}" WHERE empleados.id = ${id}`
    connection.query(update, function(err, resultado){
        if (err){
            throw err
        }else{
            console.log(resultado)
        }
    })
    connection.query("SELECT * FROM empleados", (error, data)=>{
        if(error){
            throw error
        }else{
        }
    })
}

async function eliminarEmpleado(id, res){
    const connection = await database.getConnection()
    const del = `DELETE FROM empleados WHERE empleados.id = ${id}`
    connection.query(del, function(err, resultado){
        if (err){
            throw err
        }else{
            console.log(`Aplicando: ${del}`)
            console.log(resultado)
            res.redirect("http://localhost:3000/empleados")
        }
    })
    connection.query("SELECT * FROM empleados", (error, data)=>{
        if(error){
            throw error
        }else{
        }
    })
    
}








