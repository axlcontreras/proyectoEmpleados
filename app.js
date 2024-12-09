//EXPRESS

//importamos libreria
const express = require("express")
//se crea un objeto app 
const app = express()
// console.log(app)


const database = require ("./views/database")

const cors = require("cors") 

// let mysql = require("mysql")
//     const dataBase = mysql.createConnection({ 
//     host: "localhost",
//     database: "proyectoempleados",
//     user: "root",
//     password: ""
// }) 


//use para poder tomar los datos --tambien esta la opcion de usar bodyParser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//0btener una ruta
//dos parametros, una ruta y una function
app.get("/", function(req, res){
    res.render("index")    //.send nos permite mostrar en el html
})
 
app.get("/empleados", (req, res)=>{
    res.render("empleados")
})

app.get("/contratos", (req, res)=>{
    res.render("contrataciones")
})

app.get("/empresas", (req, res)=>{
    res.render("empresas")
})

app.use(express.static('public')); //public es la carpeta en la cual estarian todos los archivos html, js, etc
//permitir utilizar el motor de vistas
app.set("view engine", "ejs")


//usar metodo para form de index
app.post("/cargarInfo2", function(req, res){
    // console.log(req)
    const datos = req.body
    console.log(datos)
})

app.post("/cargarEmpleado", function(req, res){

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
 
    
        }
    )

    
app.post("/contrataciones/confirmar", async(req, res)=>{
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
            console.log(result)

        }
    // return resultado
)



//********************************conexion BD *******************/

function consulta(instruccion){
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

function actualizarEmpleado(actualizar, id){
    connection.query(
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

async function insertarEmpleado(nombre, apellido, antiguedad, ciudad){
    const connection = await database.getConnection()
    const insert = `INSERT INTO empleados (nombre, apellido, antiguedad, ciudad, efectivo) VALUES ("${nombre}", "${apellido}", "${antiguedad}", "${ciudad}", "0")`
    connection.query(insert, function(err, resultado){
        if (err){
            throw err
        }else{
            console.log(resultado)
        }
    })


}






