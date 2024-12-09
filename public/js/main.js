//carga de arrays. 
const arrayEmpleados = []
const arrayEmpresas = []
const arrayContrataciones = []
const empleadosDB = []

//instanciar empleados. 
// const empleado1 = new Empleado (1, "Andres", "Martinez", 0, "CABA","Andres Martinez.png")
// const empleado2 = new Empleado (2, "Daniel", "Fernandez", 1,"Buenos Aires", "Daniel Fernandez.png")
// const empleado3 = new Empleado (3, "Gustavo", "Kupinski", 2, "CABA", "Gustavo Kupinski.png")
// const empleado4 = new Empleado (4, "Daniel", "Buira", 5, "Buenos Aires", "Daniel Buira.png")
// const empleado5 = new Empleado (5, "Miguel", "Rodriguez", 8, "Cordoba", "Miguel Rodriguez.png")
// const empleado6 = new Empleado (6, "Sebastian", "Cardero", 15, "Santa Fe", "Sebastian Cardero.png")
// empleado6.contratado = true

//carga desde storage o main
// if (arrayEmpleados.length == 0){
//     instanciarStorageEmpleados(arrayEmpleados)
//     if(arrayEmpleados.length == 0){
//         console.log("por ese motivo se cargan desde el main")
//         arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5, empleado6)
//         localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
//     }
// }

//CARGA DE CONTRATOS DESDE STORAGE
// if (arrayContrataciones.length == 0){
//     instanciarStorageContratos(arrayContrataciones)
//     if (arrayEmpleados.length ==0){
//         console.log("No hay contrataciones previas")
//     }
// }
// if (arrayEmpresas.length == 0){
//     instanciarStorageEmpresas(arrayEmpresas)
//     if(arrayEmpresas.length == 0){
//         console.log("En el Storage no hay ninguna empresa, se cargan desde MAIN")
//         arrayEmpresas.push()
//         localStorage.setItem("empresasCargadas", JSON.stringify(arrayEmpresas))
//     }
// }


//carga desde promesas





//cargando con async-await
const cargarEmpleadosAsync = async (array) => {
    array.length = 0;
    const resp = await fetch ("http://localhost:3000/empleadosDB") //recordar que los fetch devuelven promesas, se los puede capturar con el .then().catch().finally()
    const dataEmpleados = await resp.json() //es un metodo para poder capturar los json
    console.log(dataEmpleados)
    for (let empleado of dataEmpleados){
        const empConClass = new Empleado (empleado.id, empleado.nombre, empleado.apellido, empleado.antiguedad, empleado.ciudad, "NuevoEmpleado.png")
        array.push(empConClass)
    }
    return array
}





