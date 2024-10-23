//capturas de DOM 
let tablaEmpleados = document.getElementById("tablaEmpleados")
let busqueda = document.getElementById("busqueda")
let coincidencias = document.getElementById("coincidencias")
let selectOrden = document.getElementById("selectOrden")
let btnCargarEmpleado = document.getElementById("btnCargarEmpleado")
//capturas input cargar empleado
let nombreInput = document.getElementById("nombreInput")
let apellidoInput = document.getElementById("apellidoInput")
let antiguedadInput = document.getElementById("antiguedadInput")
let ciudadInput = document.getElementById("ciudadInput")
//funciones para empleados: 
function imprimirEmpleados(array){
    tablaEmpleados.innerHTML = ""
    array.forEach((empleado) => {
        //creo etiqueta
        let trNuevoEmpleado = document.createElement("tr")
        trNuevoEmpleado.classList = "filaEmpleado"
        trNuevoEmpleado.innerHTML = `
            <tr id="${empleado.id}">
                <th>
                  <button id = "btnVerDetalle${empleado.id}" type="button" class="btn btn-outline-secondary">Ver detalle</button>
                </th>
                <th><img src="assets/img/empleados/${empleado.imagen}" alt="Foto perfil de ${empleado.nombre} ${empleado.apellido}" style="max-width:50px;"></th>
                <th>${empleado.id}</th>
                <th>${empleado.nombre} ${empleado.apellido}</th>
                <th>${empleado.perfil}</th>
                <th>$${empleado.valorHora}</th>
                <th>${empleado.infoContratado()}</th>
                <th>
                  <button id = "btnEditar${empleado.id}" type="button" class="btn btn-outline.secondary" data-bs-toggle="tooltip" data-bs-title="Editar"><i class="fa-solid fa-pen-to-square"></i></button>
                </th>
                <th>
                  <button id = "btnBorrar${empleado.id}" type="button" class="btn btn-outline-link" data-bs-toggle="tooltip" data-bs-title="Eliminar"><i class="fa-solid fa-trash" style="color: #f00505;"></i></button>
                </th>

            </tr>`
        tablaEmpleados.append(trNuevoEmpleado)
        //capturar dentro del forEah y pasarle evento. 
        // document.getElementById(`btnEditar${empleado.id}`).addEventListener("click", ()=>{
        //     editarEmpleado(empleado)
        // })
        })
}

function editarEmpleado(empleado){

    const myModal = new bootstrap.Modal('#myModal', {
        keyboard: false

      })
    // let formEditar = document.createElement("div")
    formEditar.innerHTML = `
        <div class="modal fade" id="formEditar" tabindex="-1" data-bs-backdrop="static"aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    `
}//no funciona aun



function buscarEmpleado(array,valor){
    let busqueda = array.filter((empleado)=> empleado.nombre.toLowerCase().includes(valor.toLowerCase()) || empleado.apellido.toLowerCase().includes(valor.toLowerCase()))
    switch(selectOrden.value){
        case "0":
            imprimirEmpleados(busqueda)
        break
        case "1":
            busqueda=ordenarMayorMenorSueldo(busqueda)
        break
        case "2":
            busqueda=ordenarMenorMayorSueldo(busqueda)
        break
        case "3":
            busqueda=ordenarAlfaAz(busqueda)
        break
        case "4":
            busqueda=ordenarAlfaZa(busqueda)
        break
    }
    //CONDICIONAL COINCIDENCIAS
    if(busqueda.length == 0){
        coincidencias.innerText = `Sin coincidencias buscando empleado: ${valor}`
        tablaEmpleados.innerHTML = ""
    }else{
        coincidencias.innerText = ""
        // imprimirEmpleados(busqueda)
    }
    return busqueda
}

//ordenar empleados
function ordenarMenorMayorSueldo(array){
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((a,b)=>a.sueldoTotal - b.sueldoTotal)
    imprimirEmpleados(arrayMenorMayor)    
}

function ordenarAlfaAz(array){
    let arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a, b)=>{
        if (a.apellido.toLowerCase() < b.apellido.toLowerCase()){
            return -1
        }if (a.apellido.toLowerCase() < b.apellido.toLowerCase()){
            return 1
        }
        return 0
    })
    imprimirEmpleados(arrayAlfabetico)
}

function ordenarMayorMenorSueldo(array){
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((b,a)=>a.sueldoTotal - b.sueldoTotal)
    imprimirEmpleados(arrayMenorMayor)
}

function ordenarAlfaZa(array){
    let arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((b, a)=>{
        if (a.apellido.toLowerCase() < b.apellido.toLowerCase()){
            return -1
        }if (a.apellido.toLowerCase() < b.apellido.toLowerCase()){
            return 1
        }
        return 0
    })
    imprimirEmpleados(arrayAlfabetico)
}



//cargar empleado
function cargarEmpleado(array){
    const empleado = new Empleado (array.length+1, nombreInput.value, apellidoInput.value, antiguedadInput.value, ciudadInput.value, "NuevoEmpleado.png")
    nombreInput.value=""
    apellidoInput.value=""
    antiguedadInput.value=""
    ciudadInput.value="0"
    array.push(empleado)
    imprimirEmpleados(array)
    localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
    console.log("Se actualiza plantilla del storage")
//     function ingresarNombre(){
//         let nombre = prompt(`Por favor ingrese el nombre`)
//         while(nombre == "" || isNaN(nombre) == false){
//             if (nombre == ""){
//                 nombre = prompt(`Atención! El nombre no puede estar vacio, por favor ingrese el nombre correctamente`)
//             }else if(isNaN(nombre) == false){
//                 nombre = prompt(`Atención! El nombre no puede ser un numero, por favor ingrese el nombre correctamente`)
//             }
//         }
//         return nombre
//     }
//     function ingresarApellido(){
//         let apellido = prompt(`Por favor ingrese el apellido`)
//         while(apellido == "" || isNaN(apellido) == false){
//             if (apellido == ""){
//                 apellido = prompt(`Atención! El apellido no puede estar vacio, por favor ingrese el apellido correctamente`)
//             }else if(isNaN(apellido) == false){
//                 apellido = prompt(`Atención! El apellido no puede ser un numero, por favor ingrese el apellido correctamente`)
//             }
//         }
//         return apellido
//     }
//     // function tasarHora(){
//     //     let valorHora = Number(prompt("Por favor ingrese el valor de la hora"))
//     //     while(isNaN(valorHora) || valorHora <= 0 || valorHora == ""){
//     //         valorHora = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese el valor de la hora"))
//     //     }
//     //     return valorHora
//     // }
//     // function ingresarHoras (){
//     //     let horas = Number(prompt("Por favor ingrese la cantidad de horas trabajadas en el mes"))
//     //     while(isNaN(horas) || horas <= 0 || horas == ""){
//     //          horas = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese la cantidad de horas trabajadas en el mes correctamente"))
//     //     }
//     //     return horas
//     // }
//     function ingresarAntiguedad(){
//         let antiguedad = Number(prompt(`Por favor ingrese los años de antigüedad`))
//         while(isNaN(antiguedad) || antiguedad > 80 || antiguedad < 0 || antiguedad == ""){
//             antiguedad = Number(prompt(`Atención, los años ingresados son incorrectos! Por favor ingrese los años de antigüedad`))
//         }
//         return antiguedad
//     }
//     function ingresarCiudad(){
//         let ciudad = ""
//         while (ciudad == ""){
//             let ciudadOpcion = prompt(`Por favor ingrese el numero de la ciudad correspondiente
// 1 - CABA
// 2 - Buenos Aires
// 3 - La Plata
// 4 - Cordoba
// 5 - Santa Fe`)
//             switch(ciudadOpcion){
//                 case "1": 
//                     ciudad = "CABA"
//                 break
//                 case "2":
//                     ciudad = "Buenos Aires"
//                 break
//                 case "3":
//                     ciudad = "La Plata"
//                 break
//                 case "4":
//                     ciudad = "Cordoba"
//                 break
//                 case "5":
//                     ciudad = "Santa Fe"
//                 break
//                 default:
//                     ciudad = ""
//                     alert("El numero ingresado no corresponde a una ciudad")
//                 break
//             }
//         }
//         return ciudad
//     }

    
}








//eventos
busqueda.oninput = ()=>{ //oninput es = cada vez que cambie el valor de input 
    let filterArray = buscarEmpleado(arrayEmpleados,busqueda.value)
    imprimirEmpleados(filterArray)
}
//evento ordenar
selectOrden.addEventListener("change", ()=>{
    let arrayFilt = buscarEmpleado(arrayEmpleados, busqueda.value)
    imprimirEmpleados(arrayFilt)
})


//evento de cargar empleado
btnCargarEmpleado.addEventListener("click", ()=>{
    cargarEmpleado(arrayEmpleados)
})


//codigo
imprimirEmpleados(arrayEmpleados)