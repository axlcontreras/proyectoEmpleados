let btnIniciarContrat = document.getElementById("btnIniciarContrat")
let btnVerContrataciones = document.getElementById("btnVerContrataciones") 
let tablaEmpleadosContrat = document.getElementById("tablaEmpleadosContrat")
let contratacion = document.getElementById(`contratacion`)
let btnAceptarCancelarContrato = document.getElementById(`btnAceptarCancelarContrato`)
let modalVerDetalleEnContrato = document.getElementById(`modalVerDetalleEnContrato`)



function iniciarContrato(array){

    let idIniciar = arrayContrataciones.length + 1 //provisorio 
    let fechaIniciar = new Date().toLocaleDateString() //OK
    let empresaIniciar = ""
    let presupuestoDisponible = 0
    const arrayAsignados = []
    const arrayContrato = [] //se creó para poder concat al array de empresa (daba error circular structure) sin usar en DOM aun


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
                  <input class="form-control" id="presupuestoDisponible" value="2000000" type="number">
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
    let btnsContrataciones = document.getElementById(`btnsContrataciones`)
    btnIniciarContrato.addEventListener("click", ()=>{
    btnsContrataciones.setAttribute("hidden", "true")
    //capturamos valor de empresa 
    empresaIniciar = (document.getElementById("selectEmpresa")) //por ahora seleccionamos una empresa hardcodeada
    presupuestoDisponible = (document.getElementById("presupuestoDisponible"))
    console.log(presupuestoDisponible.value)
    // let empresaIniciar = selectEmpresa.value
      contratacion.innerHTML=`
            <div class="container pt-2 mt-3 mb-3" id="contratacion" style="color: black; background-color: white; border-style: solid; border-color: rgb(253, 123, 123);">
        <div class="row">
          <div class="col d-flex justify-content-end" id="btnCerrarContrato" data-bs-target="#modalCancelarContrato" data-bs-toggle="modal">
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
                <th><!--eliminar--></th>
              </tr>
            </thead>
            <tbody id="tablaEmpleadosEnContrato">
              
            </tbody>
          </table>
        </div>
        <div class="" >
          <div class="row">
            <div class="col">
              <h3>Total</h3>
            </div>
            <div class="col d-flex justify-content-center">
              <h3 id="totalContratacion">$${Number("0000000").toFixed(2)}</h3>
            </div>
          </div>
        </div>

        <div class="">
          <div class="row">
            <div class="col">
              <h3 style="color: red;">Presupuesto Disponible:</h3>
            </div>
            <div class="col d-flex justify-content-center">
              <h3 id="presupuestoDisponibleMostrar" style="color: red;">$${Number((presupuestoDisponible.value)).toFixed(2)}</h3>
            </div>
          </div>
        </div>

        <div class="row pb-3 pt-5">
          <div class="col d-grid gap-2 col-4 mx-auto">
            <button class="btn btn-dark" id="agregarEmpleadoAlContrato" data-bs-toggle="modal" data-bs-target="#modalVerEmpleados">Añadir Empleado</button>
            
          </div>
          <div class="col d-grid gap-2 col-4 mx-auto">
            <button class="btn btn-outline-danger" id="btnConfirmarContrato">Confirmar Contrato</button>
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

                  </tbody>
                </table>
              </div>
            </div>
          </div>
         </div>
      </div>`

      let arrayAsignados = impEmpleadosAContratar(arrayEmpleados)
      
      //confirmar el 'cancelar contrato'
      
      btnAceptarCancelarContrato.addEventListener("click", ()=>{
        contratacion.innerHTML=""
        btnsContrataciones.removeAttribute("hidden")
      })

      //CONFIRMAR CONTRATO
      let btnConfirmarContrato = document.getElementById("btnConfirmarContrato")
      btnConfirmarContrato.addEventListener("click", ()=>{
        //creamos el objeto contratacion
        const contrato = new Contratacion(idIniciar, empresaIniciar.value, Number(presupuestoDisponible.value), arrayAsignados)
        contrato.fechaContrato = fechaIniciar
        contrato.presupuestoTotal = calcularTotal(contrato.empleadosAsignados)
        arrayContrataciones.push(contrato)
        // arrayContrato.push(contrato) //se creo para duplicar la informacion de contrato por error de circular structure con empresas
        // empresaIniciar.contratos.concat(arrayContrato) //se aplicará cuando esten cargadas las empresas
        //buscar todos los empleado que esten el arraycontrataciones y arrayempelados y asignarle contratado = true
        actualizarEstadoTrue(contrato.empleadosAsignados, arrayEmpleados)
        localStorage.setItem("contratosCargados", JSON.stringify(arrayContrataciones))
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Se ha creado contrato exitosamente",
          confirmButtonColor: "#d33",
          showConfirmButton: true,
          timer: 3000
        });;
        contratacion.innerHTML = `<div class="container pt-2 mt-3 mb-3" id="contratacion">
        </div>`
        btnsContrataciones.removeAttribute("hidden")
      })



      
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
        let inputCantHoras = document.getElementById(`inputCantHoras${empleado.id}`)
        btnAgregar.addEventListener("click", ()=>{
          //actualizamos valores de empleado y lo pusheamos al array
          empleado.cantHoras = inputCantHoras.value
          empleado.sueldoMensual = empleado.calcularSueldoMensual()
          empleado.contratado = true
          arrayAsignados.push(empleado)
          //capturamos la fila y la ocultamos asi no se puede agregar 2 veces
          let filaEmpleadoModal = document.getElementById(`filaEmpleadoModal${empleado.id}`)
          filaEmpleadoModal.setAttribute("hidden", "true")
          impEmpleadosAsignados(arrayAsignados)
          //actualizar total
          let totalContratacion = document.getElementById(`totalContratacion`)
          totalContratacion.innerText = `$${calcularTotal(arrayAsignados).toFixed(2)}`
          //actualizar presupuesto
          let presupuestoDisponible = document.getElementById(`presupuestoDisponible`)
          let presupuestoDisponibleMostrar = document.getElementById(`presupuestoDisponibleMostrar`)
          presupuestoDisponibleMostrar.innerText = `$${calcularPresupuesto(presupuestoDisponible.value, calcularTotal(arrayAsignados)).toFixed(2)}` //3m provisorio, hay que capturarlo desde el input del modal

        })
      })

      function impEmpleadosAsignados(array){
        let tablaEmpleadosEnContrato = document.getElementById(`tablaEmpleadosEnContrato`)
        tablaEmpleadosEnContrato.innerHTML = ""
        array.forEach((empleado) => {
            let trNuevoEmpleado = document.createElement("tr")
            trNuevoEmpleado.id = `filaEmpleado${empleado.id}`
            trNuevoEmpleado.innerHTML = `
                <tr>
                    <th>
                      <button id = "btnVerDetalleEnContrato${empleado.id}" type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modalVerDetalleEnContrato">Ver detalle</button>
                    </th>
                    <th id="celdaImagen${empleado.id}"><img src="../assets/img/empleados/${empleado.imagen}" alt="foto ${empleado.id}" style="max-width:50px;" class="rounded"></th>
                    <th id="celdaid${empleado.id}">${empleado.id}</th>
                    <th id="celdaNombre${empleado.id}">${empleado.nombre} ${empleado.apellido}</th>
                    <th id="celdaPerfil${empleado.id}">${empleado.perfil}</th>
                    <th id="celdaValorHora${empleado.id}">$${empleado.valorHora}</th>
                    <th id="celdaCantHoras${empleado.id}">${empleado.cantHoras}</th>
                    <th id="celdaSueldoMensual${empleado.id}">$${empleado.sueldoMensual}</th>
                    <th>
                      <button id = "btnBorrar${empleado.id}" type="button" class="btn btn-outline-link" data-bs-toggle="modal" data-bs-target="#modalBorrarEmpleado" data-bs-toggle="tooltip" data-bs-title="Eliminar"><i class="fa-solid fa-trash" style="color: #f00505;"></i></button>
                    </th>
      
                </tr>`
            tablaEmpleadosEnContrato.append(trNuevoEmpleado)
            })
      
      
            
            array.forEach((empleado)=>{
      
      
            //VER DETALLE---------------------------  
            //btn ver detalle -> con un modal
            //capturamos boton de ver detalle 
                let btnVerDetalleEnContrato = document.getElementById(`btnVerDetalleEnContrato${empleado.id}`)
            //cuando hacemos click le damos formato al modal que nos muestre la info
                btnVerDetalleEnContrato.addEventListener("click", ()=>{
                modalVerDetalleEnContrato.innerHTML = `
                  <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-3" id="verDetalleTitle">${empleado.nombre} ${empleado.apellido}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="col">
                    <div><img src="../assets/img/empleados/${empleado.imagen}" class="rounded" alt="Foto perfil de ${empleado.nombre} ${empleado.apellido}" style="max-width:150px"; ></div>
                </div>
                <div class="col pe-2">
                    <b>ID: ${empleado.id}</b><br>   
                    <b>Antigüedad: ${empleado.antiguedad} año/s</b><br>
                    <b>Perfil: ${empleado.perfil}</b><br>
                    <b>Valor de hora: $${empleado.valorHora.toFixed(2)}.-</b><br>
                    <b>Salario(160hs): $${(empleado.valorHora*160).toFixed(2)}.-</b><br>
                    <b>Ciudad: ${empleado.ciudad}</b><br>
                    
                </div>
            </div>
            <div class="row d-flex pt-5">
              <div class="col d-flex justify-content-center">
                <div>
                    <h5><span ${empleado.contratado == true ? 'class = "badge text-bg-success"' : 'class = "badge text-bg-danger"'}>Estado: ${empleado.infoContratado()}</span></h5>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCerrarVerDetalle">Cerrar</button>
          </div>
        </div>
      </div>
          `
                
                
                })
            
              
      
              //BORRAR---------------------------------
              //btn eliminar
      
      
              let btnBorrar = document.getElementById(`btnBorrar${empleado.id}`)
              btnBorrar.addEventListener("click", ()=>{
                  let index = buscarIndex(array,empleado.id)
                  array.splice(index, 1)
                  //sacamos del DOM el nodo con la fila
                  let filaEmpleado = document.getElementById(`filaEmpleado${empleado.id}`)
                  filaEmpleado.remove()
                  //volvemos a agregar al modal la fila
                  let filaEmpleadoModal = document.getElementById(`filaEmpleadoModal${empleado.id}`)
                  filaEmpleadoModal.removeAttribute("hidden")
                  //cambiamos valor de total contratacion
                  let totalContratacion = document.getElementById(`totalContratacion`)
                  totalContratacion.innerText = `$${calcularTotal(array).toFixed(2)}`
                  //tambien se cambia valor de presupuesto disponible
                  let presupuestoDisponibleMostrar = document.getElementById(`presupuestoDisponibleMostrar`)
                  presupuestoDisponibleMostrar.innerText = `$${calcularPresupuesto(presupuestoDisponible.value, calcularTotal(array)).toFixed(2)}` //3m provisorio, hay que capturarlo desde el input del modal
      
              })
      
            })
            
      
      
      }
      return arrayAsignados
}

function imprimirContratos(array){
  contratacion.innerHTML=`
      <table class="table table-hover table-light">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>ID</th>
                <th>Fecha</th>
                <th>Presupuesto</th>
                <th>Cantidad Empleados</th>
              </tr>
            </thead>
            <tbody id="tablaContrataciones">
              
            </tbody>
      </table>
  `
  let tablaContrataciones = document.getElementById(`tablaContrataciones`)
  array.forEach((contrato)=>{
    let filaContrato = document.createElement("tr")
    filaContrato.id = `filaContrato${contrato.id}`
    filaContrato.innerHTML = `
    <tr>
        <th id="celdaid${contrato.id}">${contrato.id.toString().padStart(6, '0')}</th>
        <th id="celdaEmpresa${contrato.id}">${contrato.empresaContrato}</th>
        <th id="celdaFecha${contrato.id}">${contrato.fechaContrato}</th>
        <th id="celdaPresupuesto${contrato.id}">$${(contrato.presupuestoTotal).toFixed(2)}</th>
        <th id="celdaCantEmpleados${contrato.id}">${contrato.empleadosAsignados.length}</th>
    </tr>`
    tablaContrataciones.append(filaContrato)
  })
  console.log(arrayContrataciones)
}


function calcularTotal(array){
  let total = array.reduce((total, empleado)=> total += empleado.sueldoMensual,0)
  return total
}

function calcularPresupuesto(presupuesto ,total){
  return presupuesto - total

}

btnIniciarContrat.addEventListener("click", ()=>{
    iniciarContrato(arrayContrataciones)
})

btnVerContrataciones.addEventListener("click", ()=>{
  imprimirContratos(arrayContrataciones)
})

