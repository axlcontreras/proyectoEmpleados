//capturas de DOM 
let tablaEmpleados = document.getElementById("tablaEmpleados")

//funciones de dom
// for(let empleado of arrayEmpleados){
//     let empleadoNuevoDiv = document.createElement("tr") //asignamos la etiqueta "tr"
//     empleadoNuevoDiv.innerHTML = `
//             <tr id="${empleado.id}">
//                 <th>
//                   <button type="button" class="btn btn-outline-secondary">Ver detalle</button>
//                 </th>
//                 <th><img src="assets/img/${empleado.imagen}" alt="Foto perfil de ${empleado.nombre} ${empleado.apellido}" style="max-width:50px;"></th>
//                 <th>${empleado.id}</th>
//                 <th>${empleado.nombre} ${empleado.apellido}</th>
//                 <th>${empleado.perfil}</th>
//                 <th>$${empleado.valorHora}</th>
//                 <th>${empleado.infoContratado()}</th>
//                 <th>
//                   <button type="button" class="btn btn-secondary">Editar</button>
//                 </th>
//                 <th>
//                   <button type="button" class="btn btn-danger">Eliminar</button>
//                 </th>

//             </tr>`
//     tablaEmpleados.append(empleadoNuevoDiv)
// }

function imprimirEmpleados(array){
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

imprimirEmpleados(arrayEmpleados)

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
}