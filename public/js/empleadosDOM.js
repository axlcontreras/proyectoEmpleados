//***************CAPTURAS DEL DOM********************/
let tablaEmpleados = document.getElementById("tablaEmpleados")
let busqueda = document.getElementById("busqueda")
let coincidencias = document.getElementById("coincidencias")
let selectOrden = document.getElementById("selectOrden")
let btnCargarEmpleado = document.getElementById("btnCargarEmpleado")
let modalVerDetalle = document.getElementById("modalVerDetalle")
let modalEditarEmpleado = document.getElementById("modalEditarEmpleado")
let modalBorrarEmpleado = document.getElementById("modalBorrarEmpleado")
let spinnerCargaEmpleados = document.getElementById(`spinnerCargaEmpleados`)

//Capturas del input Cargar empleado
let nombreInput = document.getElementById("nombreInput") //sin uso actualmente chequear para borrar!!
let apellidoInput = document.getElementById("apellidoInput")
let antiguedadInput = document.getElementById("antiguedadInput")
let ciudadInput = document.getElementById("ciudadInput")


//***************FUNCIONES*****************/

//funcion IMPRIMIR
function imprimirEmpleados(array){
    tablaEmpleados.innerHTML = ""
    array.forEach((empleado) => {
        //creo etiqueta
        let trNuevoEmpleado = document.createElement("tr")
        trNuevoEmpleado.id = `filaEmpleado${empleado.id}`
        trNuevoEmpleado.innerHTML = `
            <tr>
                <th>
                  <button id = "btnVerDetalle${empleado.id}" type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modalVerDetalle">Ver detalle</button>
                </th>
                <th id="celdaImagen${empleado.id}"><img src="../assets/img/empleados/NuevoEmpleado.png" alt="foto ${empleado.id}" style="max-width:50px;" class="rounded"></th>
                <th id="celdaid${empleado.id}">${empleado.id}</th>
                <th id="celdaNombre${empleado.id}">${empleado.nombre} ${empleado.apellido}</th>
                <th id="celdaPerfil${empleado.id}">${empleado.perfil}</th>
                <th id="celdaValorHora${empleado.id}">$${empleado.valorHora}</th>
                <th id="celdaInfoContratado${empleado.id}">${empleado.infoContratado()}</th>
                <th>
                  <button id = "btnEditar${empleado.id}" type="button" class="btn btn-outline.secondary" data-bs-toggle="modal" data-bs-target="#modalEditarEmpleado" data-bs-title="Editar"><i class="fa-solid fa-pen-to-square"></i></button>
                </th>
                <th>
                  <button id = "btnBorrar${empleado.id}" type="button" class="btn btn-outline-link" data-bs-toggle="tooltip" data-bs-title="Eliminar"><i class="fa-solid fa-trash" style="color: #f00505;"></i></button>
                </th>

            </tr>`
        tablaEmpleados.append(trNuevoEmpleado)
        })


        
        array.forEach((empleado)=>{


        //VER DETALLE---------------------------  
        //btn ver detalle -> con un modal
        //capturamos boton de ver detalle 
            let btnVerDetalle = document.getElementById(`btnVerDetalle${empleado.id}`)
        //cuando hacemos click le damos formato al modal que nos muestre la info
            btnVerDetalle.addEventListener("click", ()=>{
            modalVerDetalle.innerHTML = `
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
      </div>`
            
            
            })
        
        

            //EDITAR------------------------------
        //btn editar -> un modal
            let btnEditar = document.getElementById(`btnEditar${empleado.id}`)
            btnEditar.addEventListener("click", ()=>{
            modalEditarEmpleado.innerHTML=`
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="editarEmpleado">Editando empleado ID:${empleado.id} | ${empleado.nombre} ${empleado.apellido}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form id="formEditarEmpleado">
                    <div class="mb-3">
                      <label for="nombreInputEditar" class="form-label">Nombre</label>
                      <input type="email" class="form-control" id="nombreInputEditar" value="${empleado.nombre}">
                    </div>
                    <div class="mb-3">
                      <label for="apellidoInputEditar" class="form-label">Apellido</label>
                      <input type="email" class="form-control" id="apellidoInputEditar" value="${empleado.apellido}">
                    </div>
                    <div class="mb-3">
                      <label for="antiguedadInputEditar" class="form-label">Antigüedad</label>
                      <input type="email" class="form-control" id="antiguedadInputEditar" value="${empleado.antiguedad}">
                    </div>
                    <div class="mb-3">
                      <label for="ciudadInputEditar" class="form-label">Ciudad</label>
                      <select class="form-select" aria-label="Default select example" id="ciudadInputEditar">
                        <option selected>Elija su ciudad</option>
                        <option value="CABA">CABA</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="La Plata">La Plata</option>
                        <option value="Cordoba">Cordoba</option>
                        <option value="Santa Fe">Santa Fe</option>
                      </select>
                    </div>
                    <div class="mb-3">
                        <label for="formFileDisable" class="form-label">Seleccione Foto de perfil</label>
                        <input class="form-control" type="file" id="formFileDisable">
                    </div>
      
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCerrarEditarEmpleado">Cerrar</button>
                  <button type="button" class="btn btn-dark" data-bs-dismiss="modal" id="btnEditarEmpleado">Guardar cambios</button>
                </div>
              </div>
            </div>
            </div>
            `
                    //capturamos inputs de modal editar
        let nombreInputEditar = document.getElementById("nombreInputEditar")   
        let apellidoInputEditar = document.getElementById("apellidoInputEditar")
        let antiguedadInputEditar = document.getElementById("antiguedadInputEditar")
        let ciudadInputEditar = document.getElementById("ciudadInputEditar")
        let imagenInputEditar = document.getElementById("imagenInputEditar")
        
        let btnEditarEmpleado = document.getElementById("btnEditarEmpleado")

        btnEditarEmpleado.addEventListener("click", ()=>{
          //si cambia nombre o apellido actualizar solo el nombre
            if(nombreInputEditar.value != empleado.nombre || apellidoInputEditar.value != empleado.apellido){
                empleado.nombre = nombreInputEditar.value
                empleado.apellido = apellidoInputEditar.value
                console.log(empleado.nombre)
                document.getElementById(`celdaNombre${empleado.id}`).innerText = `${empleado.nombre} ${empleado.apellido}`
            }
           //si cambia la antiguedad tenemos que volver a asignar
           //perfil, tambien valor de hora, sueldo aprox etc.  
            if(antiguedadInputEditar.value != empleado.antiguedad){
                empleado.antiguedad = antiguedadInputEditar.value
                empleado.perfil = empleado.indicarPerfil()
                empleado.bonoPorcentual = empleado.calcularBonoPorcentual()
                empleado.valorHora = empleado.tasarHora()
                empleado.sueldoMensual = empleado.calcularSueldoMensual()
                empleado.sueldoTotal = empleado.calcularSueldoTotal()

                document.getElementById(`celdaPerfil${empleado.id}`).innerText = empleado.perfil
                document.getElementById(`celdaValorHora${empleado.id}`).innerText = `$${empleado.valorHora}`
            }
              empleado.imagen = "NuevoEmpleado.png"
              document.getElementById(`celdaImagen${empleado.id}`) = empleado.imagen

            localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
            
            })
            

          })
          

          //BORRAR---------------------------------
          //btn eliminar -> confirmar
  
  
          let btnBorrar = document.getElementById(`btnBorrar${empleado.id}`)
          btnBorrar.addEventListener("click", ()=>{
            Swal.fire({
              title: `Eliminando empleado`,
              text: `Esta seguro que desea eliminar empleado ${empleado.nombre.toUpperCase()} ${empleado.apellido.toUpperCase()} con ID: ${empleado.id}?`,
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#ff1d00",
              cancelButtonColor: "#4d4747",
              confirmButtonText: "Eliminar"
            }).then((result) => {
              if (result.isConfirmed) {
                borrarEmpleado(empleado)
              
                Swal.fire({
                  title: "Eliminado",
                  text: "Se ha elimado empleado correctamente",
                  icon: "success",
                  confirmButtonColor: "#ff1d00"
                });
              }
            });
          })

        })
        
        function borrarEmpleado(empleado){
          let index = buscarIndex(array,empleado.id)
              array.splice(index, 1)
              let filaEmpleado = document.getElementById(`filaEmpleado${empleado.id}`)
              localStorage.setItem("empleadosCargados", JSON.stringify(array))
              filaEmpleado.remove()
        }

}


//Funciones Buscar Empleado
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

//Funciones Ordenar Empleado
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
function cargarEmpleado(){
  Toastify({

      text: `Se ha agregado empleado correctamente`,
      gravity: "top",
      position: 'center',
      style: {
        background: "linear-gradient(to right, #ff5f6d, #ffc371)"
      },
      duration: 1500
      
      }).showToast();
    tablaEmpleados.innerHTML = ""
    imprimiendoEmpleados()
}

// validaciones sin funcionar todavia
function validarNombre(input){
      let valido = false
      let mje = ""
      if (input == ""){
          mje = `Se necesita nombre`
      }else if(isNaN(input) == false){
          mje = `El nombre no puede ser un numero`
      }else{
        valido = true
      }
      document.getElementById("nombreInvalido").innerHTML = `${mje}`

      return valido
  }
function validarApellido(){
  let apellido = prompt(`Por favor ingrese el apellido`)
  while(apellido == "" || isNaN(apellido) == false){
      if (apellido == ""){
          apellido = prompt(`Atención! El apellido no puede estar vacio, por favor ingrese el apellido correctamente`)
      }else if(isNaN(apellido) == false){
          apellido = prompt(`Atención! El apellido no puede ser un numero, por favor ingrese el apellido correctamente`)
      }
  }
  return apellido
}
function validarAntiguedad(){
  let antiguedad = Number(prompt(`Por favor ingrese los años de antigüedad`))
  while(isNaN(antiguedad) || antiguedad > 80 || antiguedad < 0 || antiguedad == ""){
      antiguedad = Number(prompt(`Atención, los años ingresados son incorrectos! Por favor ingrese los años de antigüedad`))
  }
  return antiguedad
}

//funciones (ex Functions)







function imprimiendoEmpleados(array){
  tablaEmpleados.innerHTML=""
  spinnerCargaEmpleados.innerHTML=`
          <div class="container d-flex justify-content-center m-5" id="spinnerCargaEmpleados">
              <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Cargando</span>
              </div>
          </div>
            
`
//.then() para manipular el fetch(el fetch nos devuelve una promesa)
    cargarEmpleadosAsync(empleadosDB).then((array)=>{
    spinnerCargaEmpleados.innerHTML = ""
    imprimirEmpleados(array)
  })
  .catch()
}






//****************EVENTOS***************/
//oninput es = cada vez que cambie el valor de input 
busqueda.oninput = ()=>{ 
    let filterArray = buscarEmpleado(empleadosDB,busqueda.value)
    imprimirEmpleados(filterArray)
}

//Evento Ordenar Empleados
selectOrden.addEventListener("change", ()=>{
    let arrayFilt = buscarEmpleado(empleadosDB, busqueda.value)
    imprimirEmpleados(arrayFilt)
})

//Evento Cargar Empleado
btnCargarEmpleado.addEventListener("click", ()=>{
    cargarEmpleado(empleadosDB)
})



//**************CODIGO******************/

imprimiendoEmpleados(empleadosDB)



