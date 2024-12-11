//************************************CAPTURAS DEL DOM**********************/
let tablaEmpleados = document.getElementById("tablaEmpleados")
let busqueda = document.getElementById("busqueda")
let coincidencias = document.getElementById("coincidencias")
let selectOrden = document.getElementById("selectOrden")
let btnCargarEmpleado = document.getElementById("btnCargarEmpleado")
let modalVerDetalle = document.getElementById("modalVerDetalle")
let modalEditarEmpleado = document.getElementById("modalEditarEmpleado")
let modalBorrarEmpleado = document.getElementById("modalBorrarEmpleado")
let spinnerCargaEmpleados = document.getElementById(`spinnerCargaEmpleados`)

//Capturas del input Cargar empleado (//sin uso actualmente chequear para borrar!!)
let nombreInput = document.getElementById("nombreInput") 
let apellidoInput = document.getElementById("apellidoInput")
let antiguedadInput = document.getElementById("antiguedadInput")
let ciudadInput = document.getElementById("ciudadInput")


//**********************************FUNCTIONS*******************************/

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


        
        //BOTON VER DETALLE


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
                    ${empleado.efectivo == 0 ? `<b>Salario(160hs): $${(empleado.valorHora*160).toFixed(2)}.-</b>` : `<b>Salario (${empleado.cantHoras}hs): $${(empleado.valorHora*empleado.cantHoras).toFixed(2)}.-</b>`}<br>
                    <b>Ciudad: ${empleado.ciudad}</b><br>
                    
                </div>
            </div>
            <div class="row d-flex pt-5">
              <div class="col d-flex justify-content-center">
                <div>
                    <h5><span ${empleado.efectivo == 1 ? 'class = "badge text-bg-success"' : 'class = "badge text-bg-danger"'}>Estado: ${empleado.infoContratado()}</span></h5>
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
        
        

            //BOTON EDITAR
            //btn editar -> ABRE un modal 
            let btnEditar = document.getElementById(`btnEditar${empleado.id}`)
            btnEditar.addEventListener("click", ()=>{
            modalEditarEmpleado.innerHTML=`
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="editarEmpleado">Editar empleado</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form action = "/actualizarEmpleado" method="post" id="formEditarEmpleado">
                  <div class="mb-3">
                      <label for="id" class="form-label">ID</label>
                      <input type="text" name="id" class="form-control" id="id" value="${empleado.id}" readonly>
                    </div>
                    <div class="mb-3">
                      <label for="nombre" class="form-label">Nombre</label>
                      <input type="text" name="nombre" class="form-control" id="nombre" value="${empleado.nombre}">
                    </div>
                    <div class="mb-3">
                      <label for="apellido" class="form-label">Apellido</label>
                      <input type="text" class="form-control" id="apellido" name="apellido" value="${empleado.apellido}">
                    </div>
                    <div class="mb-3">
                      <label for="antiguedad"class="form-label">Antigüedad</label>
                      <input type="number" class="form-control" id="antiguedad" name="antiguedad" value="${empleado.antiguedad}">
                    </div>
                    <div class="mb-3">
                      <label for="ciudadInputEditar" class="form-label">Ciudad</label>
                      <select class="form-select" aria-label="Default select example" id="ciudad" name ="ciudad">
                        <option value="${empleado.ciudad}"selected>${empleado.ciudad}</option>
                        <option value="CABA">CABA</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="La Plata">La Plata</option>
                        <option value="Cordoba">Cordoba</option>
                        <option value="Santa Fe">Santa Fe</option>
                      </select>
                    </div>
                    
      
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCerrarEditarEmpleado">Cerrar</button>
                      <button type="submit" class="btn btn-dark" data-bs-dismiss="modal" id="btnEditarEmpleado">Guardar cambios</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
            `

                let btnEditarEmpleado = document.getElementById("btnEditarEmpleado")

                //BOTON CONFIRMAR EDITAR EN EL MODAL

                btnEditarEmpleado.addEventListener("click", ()=>{
                  actualizarEmpleado()
                  
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
            }).then( async (result) => {
              if (result.isConfirmed) {
                if (empleado.efectivo == 0){
                  const res = await fetch("http://localhost:3000/eliminarEmpleado",
                    {
                        method: "POST",
                        body: JSON.stringify(empleado), //en este parentesis enviamos a eliminarempleado el empleado seleccionado
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    console.log(res)
                    Swal.fire({
                      title: "Eliminado",
                      text: "Se ha elimado empleado correctamente",
                      icon: "success",
                      confirmButtonColor: "#ff1d00"
                    });
                    setTimeout(()=>{
                      location.reload(); //reload para recargar pagina y mostrar los cambios
                    }, 1500)
                    
                }else{
                  Swal.fire({
                    title: "Error",
                    text: "No se ha podido eliminar empleado",
                    icon: "error",
                    confirmButtonColor: "#4d4747"
                  });

                }
              
              }
            });
          })

        })

}


//Funciones Buscar Empleado
function buscarEmpleado(array,valor){
    let busqueda = array.filter((empleado)=> empleado.nombre.toLowerCase().includes(valor.toLowerCase()) || empleado.apellido.toLowerCase().includes(valor.toLowerCase()))
    switch(selectOrden.value){
        case "0":
            imprimirEmpleados(busqueda)
        break
        case "1":
            busqueda=buscarContratados(busqueda)
            busqueda=ordenarMayorMenorSueldo(busqueda)
        break
        case "2":
            busqueda=buscarContratados(busqueda)
            busqueda=ordenarMenorMayorSueldo(busqueda)
        break
        case "3":
            busqueda=ordenarAlfaAz(busqueda)
        break
        case "4":
            busqueda=ordenarAlfaZa(busqueda)
        break
        case "5":
            busqueda=ordenarMayorHoras(busqueda)
        break
        case "6":
            busqueda=ordenarMenorHoras(busqueda)
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
    arrayMenorMayor.sort((a,b)=>a.sueldoMensual - b.sueldoMensual)
    imprimirEmpleados(arrayMenorMayor)
    return arrayMenorMayor    
}

function ordenarMayorMenorSueldo(array){
    let arrayMayorMenor = [].concat(array)
    arrayMayorMenor.sort((b,a)=>a.sueldoMensual - b.sueldoMensual)
    imprimirEmpleados(arrayMayorMenor)
    return arrayMayorMenor
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
    return arrayAlfabetico
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
    return arrayAlfabetico
}

function ordenarMayorHoras(array){
  let arrayMayorHoras = [].concat(array)
  arrayMayorHoras.sort((b,a)=>a.valorHora - b.valorHora)
  imprimirEmpleados(arrayMayorHoras)
  return arrayMayorHoras    
}

function ordenarMenorHoras(array){
  let arrayMenorHoras = [].concat(array)
  arrayMenorHoras.sort((a,b)=>a.valorHora - b.valorHora)
  imprimirEmpleados(arrayMenorHoras)
  return arrayMenorHoras
}

//funcion para filtar solo contratados
function buscarContratados(array){
    let filtro = array.filter((empleado) => empleado.efectivo == 1)
    return filtro
}



//Funcion para iniciar un nuevo empleado(solo muestra tosty, la funciona la tiene el back)
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

function actualizarEmpleado(){
  Toastify({

      text: `Se ha actualizado empleado correctamente`,
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







function imprimiendoEmpleados(array){ //se agrega un spinner para la carga de empleados
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
    imprimirEmpleados(empleadosDB)
  })
  .catch()
}






//*********************************EVENTS*************************************/
//oninput es = cada vez que cambie el valor de input 
busqueda.oninput = ()=>{ 
    let filterArray = buscarEmpleado(empleadosDB, busqueda.value)
    imprimirEmpleados(filterArray)
}

//Evento Ordenar Empleados
selectOrden.addEventListener("change", ()=>{
    let arrayFilt = buscarEmpleado(empleadosDB, busqueda.value)
    imprimirEmpleados(arrayFilt)
})

//Evento Cargar Empleado
btnCargarEmpleado.addEventListener("click", ()=>{
    cargarEmpleado()
})



//*********************************CODE************************************/

imprimiendoEmpleados(empleadosDB)



