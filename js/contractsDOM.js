let btnIniciarContrat = document.getElementById("btnIniciarContrat")
let tablaEmpleadosContrat = document.getElementById("tablaEmpleadosContrat")
let contratacion = document.getElementById(`contratacion`)




function iniciarContrato(array){

    let idIniciar = arrayContrataciones.length + 1 //provisorio 
    let fechaIniciar = new Date().toLocaleDateString() //OK
    let fondosDisponibles = 0 //tenemos que crear el input que lo pida en el modal
    let fondosIniciar = 0
    let empleado = ""
    const arrayAsignados = []
    const arrayContrato = [] //se creó para poder concat al array de empresa (daba error circular structure)


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
                  <h5>Contratación N°: ${idIniciar.toString().padStart(6,'0')}</h5>
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
              <div class="row">
                <div class="col">
                  Presupuesto disponible
                  <input class="form-control" id ="presupuestoDisponible" value="1000000" type="number">
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
    //capturamos valor de empresa 
    let empresaIniciar = (document.getElementById("selectEmpresa")) //por ahora seleccionamos una empresa hardcodeada
    // let empresaIniciar = selectEmpresa.value
      contratacion.innerHTML=`
            <div class="container pt-2 mt-3 mb-3" id="contratacion" style="color: black; background-color: white; border-style: solid; border-color: rgb(253, 123, 123);">
        <div class="row">
          <div class="col d-flex justify-content-end" id="btnCerrarContrato">
            <button class="btn btn-danger"> X </button>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col">
            <h4>Contratación N°: ${idIniciar.toString().padStart(6,'0')}</h4>
            <h5>Empresa: ${empresaIniciar.value}</h5>
          </div>
          <div class="col d-flex justify-content-end">
            <h4>Fecha: ${fechaIniciar}</h4>
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

      //volcar modal ver empleado
      let modalVerEmpleadoDiv = document.getElementById("modalVerEmpleadoDiv") //hacemos este proceso porque no funcionaba estando desde el html directo
      modalVerEmpleadoDiv.innerHTML = `
      <div class="modal fade" id="modalVerEmpleados" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="verEmpleadosTitle">Buscar empleados</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="listaEmpleadosParaAgregar">
                <div class="container">
                  <div class="col d-inline-flex p-2">
                    <form class="">
                    <input id="busqueda" class="form-control me-2 form-file-button-hover-bg" placeholder="Buscar" aria-label="Search">
                    </form>
                    <ul>
                      <select id="selectOrden" class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected value="0">Ordenar por:</option>
                        <option value="1">Mayor sueldo</option>
                        <option value="2">Menor sueldo</option>
                        <option value="3">Alfabeticamente Apellido A-Z</option>
                        <option value="4">Alfabeticamente Apellido Z-A</option>
                      </select>
                    </ul>
                  </div>
                </div>

                <table class="table table-hover table-light">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Perfil</th>
                      <th>Valor de hora</th>
                      <th>Horas mensuales</th>
                      <th>Agregar</th>
                    </tr>
                  </thead>
                  <tbody id="tablaEmpleadosAgregar">
                    <tr>
                      <th>4</th>
                      <th>Axel Contreras</th>
                      <th>Trainee</th>
                      <th>$2500</th>
                      <th><input class="form-control" type="number" style="width: 80px;" placeholder=""></th>
                      <th><button class="btn btn-danger">Agregar</button></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
         </div>
      </div>`

      //agregamos el evento de que cuando empiece a buscar primero y luego ordenar se vean los empleados
      //para despues
      impEmpleadosAContratar(arrayEmpleados)




      
    })
}



function impEmpleadosAContratar(array){
  let arrayAsignados = []
    let tablaEmpleadosAgregar = document.getElementById(`tablaEmpleadosAgregar`)
    tablaEmpleadosAgregar.innerHTML = ""
    array.forEach((empleado) => {
        //creo etiqueta
        let trNuevoEmpleado = document.createElement("tr")
        trNuevoEmpleado.id = `filaEmpleadoModal${empleado.id}`
        trNuevoEmpleado.innerHTML = `
            <tr>
                <th id="celdaModalid${empleado.id}">${empleado.id}</th>
                <th id="celdaModalNombre${empleado.id}">${empleado.nombre} ${empleado.apellido}</th>
                <th id="celdaModalPerfil${empleado.id}">${empleado.perfil}</th>
                <th id="celdaModalValorHora${empleado.id}">$${empleado.valorHora}</th>
                <th> <input id="inputCantHoras${empleado.id}"class="form-control" type="number" style="width: 80px;" value="160"></th>
                <th> <button id="btnAgregar${empleado.id}" type="button" class="btn btn-danger">Agregar</button></th>

            </tr>`
          
        
        tablaEmpleadosAgregar.append(trNuevoEmpleado)
        })

          //capturamos el boton agregar del empleado que necesitamos, tambien el value del input sobre la cantidad de horas.
          //se puede crear un default (160hs)para cuando no se haya ingresado nada en el input 
        arrayEmpleados.forEach((empleado)=>{
        let btnAgregar = document.getElementById(`btnAgregar${empleado.id}`)
        console.log(btnAgregar)
        let inputCantHoras = document.getElementById(`inputCantHoras${empleado.id}`)
        btnAgregar.addEventListener("click", ()=>{
          console.log(`apretando btn agregar ${empleado.id}`)
          empleado.cantHoras = inputCantHoras.value
          empleado.contratado = true
          arrayAsignados.push(empleado)
          let filaEmpleadoModal = document.getElementById(`filaEmpleadoModal${empleado.id}`)
          filaEmpleadoModal.remove()
        })
      })
      console.log(arrayAsignados)
}

btnIniciarContrat.addEventListener("click", ()=>{
    iniciarContrato(arrayContrataciones)
})


