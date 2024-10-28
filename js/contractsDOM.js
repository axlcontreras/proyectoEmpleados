let btnIniciarContrat = document.getElementById("btnIniciarContrat")
let tablaEmpleadosContrat = document.getElementById("tablaEmpleadosContrat")
let contratacion = document.getElementById(`contratacion`)

//Funcion para iniciar contrataciones 
//capturar el div donde volcaremos la tabla de empleados (no contratados agregar despues)↑↑↑
//recorremos el array de empleados y lo imprimimo pero ahora no debe tener el boton de eliminar y editar
//si no que tiene que tener el boton de agregar empleado
function iniciarContrato(array){
    let modalIniciarContrato = document.getElementById(`modalIniciarContrato`)
    modalIniciarContrato.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="iniciarContratoTitle">Iniciando contratación</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <h5>Contratación N°: ${array.length + 1}</h5>
                </div>
                <div class="col">
                  <ul>
                    Empresa:
                    <select id="selectEmpresa" class="form-select form-select-sm" aria-label=".form-select-sm example">
                      <option selected value="0">Seleccionar Empresa</option>
                      <option value="Empresa 1 S.A">Empresa 1 S.A</option>
                      <option value="Empresa 2 S.A">Empresa 2 S.A</option>
                      <option value="Empresa 3 S.A">Empresa 3 S.A</option>
                      <option value="Empresa 4 S.A">Empresa 4 S.A</option>
                    </select>
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCerrarIniciarContrato">Cerrar</button>
              <button type="text" class="btn btn-danger" data-bs-dismiss="modal" id="btnIniciarContrato">Iniciar</button>
            </div>
          </div>
        </div>`


    //ver ventana de contratacion
    let btnIniciarContrato = document.getElementById(`btnIniciarContrato`)
    btnIniciarContrato.addEventListener("click", ()=>{
      contratacion.innerHTML=`
            <div class="container pt-2 mt-3 mb-3" id="contratacion" style="color: black; background-color: white; border-style: solid; border-color: rgb(253, 123, 123);">
        <div class="row">
          <div class="col d-flex justify-content-end" id="btnCerrarContrato">
            <button class="btn btn-danger"> X </button>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col">
            <h4>Contratación N°: 1</h4>
            <h5>Empresa: Empresa 1 S.A</h5>
          </div>
          <div class="col d-flex justify-content-end">
            <h4>Fecha: 01/01/2025</h4>
          </div>
        </div>
        <div class="m-5" id="listaEmpleadosEnContrato">
          <table class="table table-hover table-light">
            <thead>
              <tr>
                <th><!--ver detalle --></th>
                <th><!--foto>--></th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Perfil</th>
                <th>Valor de hora</th>
                <th>Horas mensuales</th>
                <th>Sueldo</th>
                <th>X</th>
              </tr>
            </thead>
            <tbody id="tablaEmpleadosEnContrato">
            </tbody>
          </table>
        </div>
        <div class="" id="total">
          <div class="row">
            <div class="col">
              <h3>Total</h3>
            </div>
            <div class="col d-flex justify-content-center">
              <h3>$0000000,00</h3>
            </div>
          </div>
        </div>

        <div class="row pb-3 pt-5">
          <div class="col d-grid gap-2 col-4 mx-auto">
            <button class="btn btn-dark" id="agregarEmpleadoAlContrato" data-bs-toggle="modal" data-bs-target="#modalVerEmpleados">Añadir Empleado</button>
          </div>
          <div class="col d-grid gap-2 col-4 mx-auto">
            <button class="btn btn-outline-danger">Confirmar Contrato</button>
          </div>
        </div>
      </div>`
    })
}

function creandoContrato(){
  let btnIniciarContrato = document.getElementById(`btnIniciarContrato`)
  contratacion.innerHTML = `
  div`
}


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
    iniciarContrato(arrayContrataciones)
})


