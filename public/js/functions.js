//funcion utilizada en DOM 
function actualizarEstadoTrue(arrayEmpleadosEnContrato, arrayEmpleadosCargados){
    arrayEmpleadosEnContrato.forEach((empleadoEnContrato) => {
        arrayEmpleadosCargados.forEach((empleadoCargado) => {
            if(empleadoEnContrato.id == empleadoCargado.id){
                empleadoCargado.contratado = true
                console.log(`El empleado contratado ahora figura como contratado`)
            }
        })
    })
}
function actualizarEstadoFalse(arrayEmpleadosEnContrato, arrayEmpleadosCargados){
    arrayEmpleadosEnContrato.forEach((empleadoEnContrato) => {
        arrayEmpleadosCargados.forEach((empleadoCargado) => {
            if(empleadoEnContrato.id == empleadoCargado.id){
                empleadoCargado.contratado = false
                console.log(`El empleado contratado ahora figura como NO contratado`)
            }
        })
    })
}
function asignarContrato(arrayEmpleadosEnContrato, arrayEmpleadosCargados){
    arrayEmpleadosEnContrato.forEach((empleadoEnContrato) => {
        arrayEmpleadosCargados.forEach((empleadoCargado) => {
            if(empleadoEnContrato.id == empleadoCargado.id){
                empleadoCargado.contratado = true
                console.log(`El empleado contratado ahora figura como contratado`)
            }
        })
    })
}

//-------------------------------------------------------------------------------------------------------

//Funciones para cargar desde STORAGE
// function instanciarStorageEmpleados(array){
//     if (localStorage.getItem("empleadosCargados")){
//         console.log("Se cargan empleados desde Storage")
//         let empleadosStorage = JSON.parse(localStorage.getItem("empleadosCargados"))
//         empleadosStorage.forEach((empleado) => 
//             {
//             let contratadoStorage = empleado.contratado
//             const empConClass = new Empleado (empleado.id, empleado.nombre, empleado.apellido, empleado.antiguedad, empleado.ciudad, empleado.imagen)
//             empConClass.contratado = contratadoStorage
//             array.push(empConClass)
//             }
//         )
//     }else(
//         console.log("No hay empleados cargados en el storage")
//     )
// }

// function instanciarStorageEmpresas(array){
//     if (localStorage.getItem("empresasCargadas")){
//         console.log("Se cargan empresas desde Storage")
//         let empresasStorage = JSON.parse(localStorage.getItem("empresasCargadas"))
//         empresasStorage.forEach((empresa) => 
//             {
//             const empConClass = new EmpresaCliente (empresa.id, empresa.nombre, empresa.cuit, empresa.telefono, empresa.ciudad)
//             array.push(empConClass)
//             }
//         )
//     }else(
//         console.log("No hay empresas cargadas en el storage")
//     )
// }

// function instanciarStorageContratos(array){
//     if (localStorage.getItem("contratosCargados")){
//         console.log("Se cargan contrato/s desde Storage")
//         let contratosStorage = JSON.parse(localStorage.getItem("contratosCargados"))
//         contratosStorage.forEach((contrato) =>
//             {
//                 const contratoConClass = new Contratacion (contrato.id, contrato.empresaContrato, contrato.fondos, contrato.empleadosAsignados)
//                 contratoConClass.fechaContrato = contrato.fechaContrato
//                 contratoConClass.presupuestoTotal = contrato.presupuestoTotal
//                 array.push(contratoConClass)
//             }
//         )
//     }else{
//         console.log("No hay contrataciones previas")
//     }
// }

// function precargarContratados(array){ //sin terminar
//     let consulta = prompt("Desea continuar con las contrataciones realizadas?")
//     if (consulta.toLowerCase() == "si"){
//         alert("Se continuará con las contrataciones")
//         instanciarStorage(array)
//     }else{
//         alert("Se iniciará un nuevo proceso de contrataciones")
//     } 
// }
