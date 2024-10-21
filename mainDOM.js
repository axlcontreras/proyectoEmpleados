//capturas de DOM 
let tablaEmpleados = document.getElementById("tablaEmpleados")
let busqueda = document.getElementById("busqueda")
let coincidencias = document.getElementById("coincidencias")
let selectOrden = document.getElementById("selectOrden")

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
    //CONDICIONAL COINCIDENCIAS
    if(busqueda.length == 0){
        console.log(`No se encontraron coincidencias con: ${valor}`)
        coincidencias.innerText = `Sin coincidencias buscando empeado: ${valor}`
        tablaEmpleados.innerHTML = ""
    }else{
        coincidencias.innerText = ""
        imprimirEmpleados(busqueda)
    }
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







//eventos
busqueda.oninput= ()=>{
    buscarEmpleado(arrayEmpleados,busqueda.value)
}
selectOrden.addEventListener("change", ()=>{
    console.log(selectOrden.value)
    switch(selectOrden.value){
        case "0":
            imprimirEmpleados(arrayEmpleados)
        break
        case "1":
            ordenarMayorMenorSueldo(arrayEmpleados)
        break
        case "2":
            ordenarMenorMayorSueldo(arrayEmpleados)
        break
        case "3":
            ordenarAlfaAz(arrayEmpleados)
        break
        case "4":
            ordenarAlfaZa(arrayEmpleados)
        break
    }
})
//codigo
imprimirEmpleados(arrayEmpleados)