let btnIniciarContrat = document.getElementById("btnIniciarContrat")
let tablaEmpleadosContrat = document.getElementById("tablaEmpleadosContrat")


//Funcion para iniciar contrataciones 
//capturar el div donde volcaremos la tabla de empleados (no contratados agregar despues)↑↑↑
//recorremos el array de empleados y lo imprimimo pero ahora no debe tener el boton de eliminar y editar
//si no que tiene que tener el boton de agregar empleado

function imprimirEmpleadosContrat(array){
    tablaEmpleadosContrat.innerHTML = ""
    array.forEach((empleado) => {
        //creo etiqueta
        let trNuevoEmpleado = document.createElement("tr")
        trNuevoEmpleado.classList = `filaEmpleado${empleado.id}`
        trNuevoEmpleado.innerHTML = `
            <tr id="${empleado.id}">
                <th>
                  <button id = "btnVerDetalle${empleado.id}" type="button" class="btn btn-outline-secondary">Ver detalle</button>
                </th>
                <th id="filaImagen${empleado.id}"><img src="../assets/img/empleados/${empleado.imagen}" alt="Foto perfil de ${empleado.nombre} ${empleado.apellido}" style="max-width:50px;"></th>
                <th id="filaid${empleado.id}">${empleado.id}</th>
                <th id="filaNombre${empleado.id}">${empleado.nombre} ${empleado.apellido}</th>
                <th id="filaApellido${empleado.id}">${empleado.perfil}</th>
                <th id="filaValorHora${empleado.id}">$${empleado.valorHora}</th>
                <th id="filaInfoContratado${empleado.id}">${empleado.infoContratado()}</th>
                <th>
                  <button id = "btnAgregar${empleado.id}" type="button" class="btn btn-outline.secondary" data-bs-toggle="tooltip" data-bs-title="Agregar">Agregar</button>
                </th>
                <th>
                  <button id = "btnBorrar${empleado.id}" type="button" class="btn btn-outline-link" data-bs-toggle="tooltip" data-bs-title="Eliminar"><i class="fa-solid fa-trash" style="color: #f00505;"></i></button>
                </th>

            </tr>`
        tablaEmpleadosContrat.append(trNuevoEmpleado)
        //capturar dentro del forEah y pasarle evento. 
        // document.getElementById(`btnEditar${empleado.id}`).addEventListener("click", ()=>{
        //     editarEmpleado(empleado)
        // })
        })
}

btnIniciarContrat.addEventListener("click", ()=>{
    console.log("deberia empezar a mostrar la lista de empleados no contratados")
    imprimirEmpleadosContrat(arrayEmpleados)
})


