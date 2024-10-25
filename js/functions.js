//Funciones de MENU PRINCIPAL
function menuPrincipal(){
    let cerrar = false
    while (cerrar == false){
        let opcionMenu = prompt(`Ingrese la opción deseada
            1 - Empleados
            2 - Empresas
            3 - Contrataciones
            0 - Cerrar aplicación`)
        switch(opcionMenu){
            case "1":
                menuEmpleados()
            break
            case "2":
                menuEmpresas()
            break
            case "3":
                if (arrayEmpleados.length == 0){
                    alert("No hay empleados cargados, debe cargar empleados")
                }else if(arrayEmpresas.length == 0){
                    alert("No hay empresas cargadas, debe cargar al menos una empresa")
                }else{
                    menuContrataciones()
                }
            break
            case "0":
                alert("Cerrando aplicación")
                cerrar = true
            break
            default:
                alert("La opción ingresada es incorrecta")
            break
        }
    }
    localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
    localStorage.setItem("empresasCargadas", JSON.stringify(arrayEmpresas))
}

//-------------------------------------------------------------------------------------------------------


//Funciones de MENU EMPRESAS
function menuEmpresas(){
    let cerrar = false
    let empresa = arrayEmpresas[0]
    while (cerrar == false){
        if (arrayEmpresas.length == 0){
            opcion = prompt(`EMPRESAS || No hay empresas cargadas
        Ingrese la opcion que desea:
            1 - Cargar Empresa
            0 - Volver al menu principal`)
            if (opcion == "1"){
                empresa = cargarEmpresa()
            }else if(opcion == "0"){
                cerrar = true
            }else{
                alert("La opción indicada no es correcta")
            }
        }else{
            opcion = prompt(`EMPRESAS || Empresa seleccionada: ${empresa.nombre} CUIT:${empresa.cuit} 
            Ingrese la opcion que desea:
                1 - Seleccionar empresa
                2 - Cargar Empresa
                3 - Editar Empresa
                4 - Borrar Empresa
                5 - Contratos de empresa
                0 - Volver al menu principal`)
            switch(opcion){
                case "1":
                    empresa = seleccionarEmpresa(arrayEmpresas)
                break
                case "2":
                    empresa = cargarEmpresa(arrayEmpresas)
                break
                case "3"://editar empresa
                let volverMenu = false
                while (volverMenu == false){
                    let opcionEditar = prompt(`Se editará empresa: ${empresa.nombre} ${empresa.cuit}
            Ingrese la opción a editar:
                1 - Nombre
                2 - Cuit
                3 - Ciudad
                4 - Telefono       
                0 - Volver`)
                        switch(opcionEditar){
                            case "1":
                                empresa.nombre = empresa.ingresarNombre()
                            break
                            case "2":
                                empresa.cuit = empresa.ingresarCuit()
                            break
                            case "3":
                                empresa.ciudad = empresa.ingresarCiudad()
                            break
                            case "4":   
                                empresa.telefono = empresa.ingresarTel()
                            break
                            case "0":
                                volverMenu = true
                            break
                            default:
                                alert(`La opción seleccionada ${opcionEditar} no es valida`)
                            break
                        }
                }
                break
                case "4":
                    empresa = borrarEmpresa(empresa, arrayEmpresas)
                break
                case "5":
                    verContratos(empresa)
                break
                case "0":
                    alert("Volviendo al menu principal")
                    cerrar = true
                break
            }
        }
    }
}


function cargarEmpresa(){
    let idEmpresaCarg = asignarID(arrayEmpresas)
    let nombreEmpresaCarg = ingresarNombre()
    let cuitEmpresaCarg = ingresarCuit()
    let telEmpresaCarg = ingresarTel()
    let ciudadEmpresaCarg = ingresarCiudad()
    alert("Se carga empresa")
    const empresa = new EmpresaCliente(idEmpresaCarg, nombreEmpresaCarg, cuitEmpresaCarg, telEmpresaCarg, ciudadEmpresaCarg)
    arrayEmpresas.push(empresa)

    function ingresarNombre(){
        let nombre = prompt(`Por favor ingrese el nombre de la empresa`)
        while(nombre == "" || isNaN(nombre) == false){
            if (nombre == ""){
                nombre = prompt(`Atención! El nombre no puede estar vacio, por favor ingrese el nombre correctamente`)
            }else if(isNaN(nombre) == false){
                nombre = prompt(`Atención! El nombre no puede ser un numero, por favor ingrese el nombre correctamente`)
            }
        }
        return nombre
    }
    function ingresarCuit (){
        let cuit = Number(prompt("Por favor ingrese el CUIT de la empresa(Debe tener 11 digitos, sin guiones)"))
        while(isNaN(cuit) || cuit.toString().length != 11){
            if (isNaN(cuit)){
                cuit = Number(prompt("Atención! El Cuit debe ser un numero. Por favor ingrese el CUIT de la empresa(Debe tener 11 digitos, sin guiones)"))
            }else if (cuit.toString().length != 11){
                cuit = Number(prompt("Atención! El CUIT debe tener 11 Digitos. Por favor ingrese el CUIT de la empresa(Debe tener 11 digitos, sin guiones) "))
            }
        }
        return cuit
    }
    function ingresarTel (){
        let tel = Number(prompt("Por favor ingrese el numero telefónico de la empresa(Sin 0 ni 15, sin guiones (10 Digitos). Ej: 1150503333)"))
        while(isNaN(tel) || tel.toString().length != 10){
            if (isNaN(tel)){
                tel = Number(prompt("Atención! El numero telefónico debe ser un numero. Por favor ingrese el telefono de la empresa(Sin 0 ni 15, sin guiones (10 Digitos). Ej: 1150503333)"))
            }else if (tel.toString().length != 10){
                tel = Number(prompt("Atención! El numero telefónico debe tener 10 Digitos. Por favor ingrese el telefono de la empresa(Sin 0 ni 15, sin guiones (10 Digitos). Ej: 1150503333)"))
            }
        }
        return tel
    }
    function ingresarCiudad(){
        let ciudad = ""
        while (ciudad == ""){
            let ciudadOpcion = prompt(`Por favor ingrese el numero de la ciudad correspondiente
1 - CABA
2 - Buenos Aires
3 - La Plata
4 - Cordoba
5 - Santa Fe`)
            switch(ciudadOpcion){
                case "1": 
                    ciudad = "CABA"
                break
                case "2":
                    ciudad = "Buenos Aires"
                break
                case "3":
                    ciudad = "La Plata"
                break
                case "4":
                    ciudad = "Cordoba"
                break
                case "5":
                    ciudad = "Santa Fe"
                break
                default:
                    ciudad = ""
                    alert("El numero ingresado no corresponde a una ciudad")
                break
            }
        }
        return ciudad
    }
    return empresa
}
function mostrarEmpresaLista(array){
    let info = ""
    array.forEach(
        function(empresa){
            info = info+empresa.exponerEmpresa()+`
`
    })
    return info
}
function seleccionarEmpresa(array){
    let seleccionID = Number(prompt(`Por favor seleccione el empresa segun ID: 
                    
${mostrarEmpresaLista(array)}`))
    let empresaSeleccionada = array.find((empresa)=>empresa.id == seleccionID)
    while (empresaSeleccionada == undefined){
        alert(`El valor ingresado no corresponde al ID de ninguna empresa`)
        seleccionID = Number(prompt(`Por favor seleccione la empresa segun ID: 
                    
${mostrarEmpresaLista(array)}`))
        empresaSeleccionada = array.find((empresa)=>empresa.id == seleccionID)
    }
    return empresaSeleccionada
}
function asignarID(array){
    //el id para empresa: buscar el id mas grande y a ese numero agregarle 1. pensarlo! 
    let idNuevo = 1
    if (array.length == 0){
        idNuevo = 1
    }else{
        idNuevo = array[array.length-1].id + 1
    }
    return idNuevo

}
function borrarEmpresa(empresa, array){
    let preguntaBorrar = prompt(`Esta seguro que desea borrar la empresa ${empresa.nombre}?`)
    if (preguntaBorrar.toLowerCase() == "si"){
        let index = buscarIndex(array,empresa.id)
        array.splice(index, 1)
        alert(`Se ha borrado la información de la empresa correctamente`)
        empresa = array[0]
    }else{
        alert(`No se ha borrado la empresa`)
    }
    localStorage.setItem("empresasCargadas", JSON.stringify(arrayEmpresas))
    return empresa
}
function verContratos(empresa){
    let contratos = arrayContrataciones.filter((contrato)=>contrato.empresaContrato.nombre == empresa.nombre)
    if (contratos.length == 0){
        alert(`La empresa no tiene contratos`)
    }else{
        alert(`Los contratos de la empresa ${empresa.nombre} son:

${mostrarContratosLista(contratos)}`) //cambiar esto
    }
}
function mostrarContratosLista(array){
    let info = ""
    array.forEach(
        function(contrato){
            info = info+contrato.exponerContrato()+`
`
    })
    return info

}

//-------------------------------------------------------------------------------------------------------

//Funciones de MENU CONTRATAR
function menuContrataciones(){
    let cerrar = false
    let contrato = new Contratacion(0, "Sin empresa", 0, arrayEmpleados)
    while (cerrar == false){
        if (localStorage.getItem("contratacion")){
            let consultaContrataciones = prompt(`Se ha encontrado una contratación previa desea continuar?`)
            if (consultaContrataciones.toLowerCase() == "si"){
                let contratoStorage = localStorage.getItem("contratacion")
                contrato = new Contratacion(contratoStorage.empresaContrato, contratoStorage.empleadosAsignados)
            }
        }else{
            alert(`No se han encontrado una contratación previa deberá generar una nueva contratación`)
        } //todo este menu deberá estar en 
        if(contrato == undefined){
        }
        opcionContrato = prompt(`Contrato seleccionado n°: ${contrato.id.toString().padStart(6,'0')}
            Ingrese la opción que desea: 
                1 - Crear nuevo contrato
                2 - Ver detalle de contrato
                3 - Ver contratos anteriores
                4 - Elegir otro contrato
                0 - Volver al menu principal`)
        switch(opcionContrato){
            case "1":
                iniciarContrato()
            break
            case "2":
                alert("En contrucción")
            break
            case "3":
                alert("En contrucción")
            break
            case "4":
                alert("En contrucción")
            break
            case "0":
                alert("Volviendo al menu principal")
                cerrar = true
            break
            default:
                alert("La opción ingresada es incorrecta")
            break
        }
    }
}


function iniciarContrato(){
    let idIniciar = asignarID(arrayContrataciones)
    let empresaIniciar = arrayEmpresas[0]
    let fechaIniciar = new Date().toLocaleDateString()
    let fondosDisponibles = 0
    let fondosIniciar = 0
    let empleado = ""
    const arrayAsignados = []
    const arrayContrato = [] //se creó para poder concat al array de empresa (daba error circular structure)
    let cancelar = false
    let aceptar = false
    while (cancelar == false && aceptar == false){
        let opcionContrato = prompt(`Contratación N°: ${idIniciar.toString().padStart(6,'0')}
        Por favor ingrese la opcion que desea:
            1 - Elegir Empresa     Empresa: ${empresaIniciar.nombre}
            2 - Configurar fondos  Fondos:$${fondosDisponibles}
            3 - Agregar empleado
            4 - Quitar empleado
            5 - Ver resumen
            6 - Aceptar contrato
            7 - Cancelar contrato `)
        switch(opcionContrato){
                case "1":
                    empresaIniciar = seleccionarEmpresa(arrayEmpresas)
                break
                case "2":
                    fondosDisponibles = actualizarFondos(fondosDisponibles, arrayAsignados)
                    fondosIniciar = fondosDisponibles
                break
                case "3":
                    alert("Seleccione empleado para agregar al contrato")
                    empleado = seleccionarEmpleado(arrayEmpleados)
                    fondosDisponibles = agregarEmpleado(fondosDisponibles, empleado, arrayAsignados)
                break
                case "4":
                    alert("Seleccione empleado para quitar del contrato")
                    empleado = seleccionarEmpleado(arrayAsignados)
                    fondosDisponibles = quitarEmpleado(fondosDisponibles, empleado, arrayAsignados)
                break
                case "5":
                    mostrarResumenContrato()
                break
                case "6":
                    //dar aceptar tiene que asignar empresa a empleado y contrato=true
                    //
                    const contrato = new Contratacion(idIniciar, empresaIniciar, fondosIniciar, arrayAsignados)
                    contrato.fechaContrato = fechaIniciar
                    arrayContrataciones.push(contrato)
                    arrayContrato.push(contrato)
                    empresaIniciar.contratos.concat(arrayContrato)
                    //buscar todos los empleado que esten el arraycontrataciones y arrayempelados y asignarle contratado = true
                    actualizarEstadoTrue(contrato.empleadosAsignados, arrayEmpleados)
                    aceptar = true
                    alert(`Se ha generado el contrato exitosamente`)
                break
                case "7":
                    let consultaCerrar = prompt("Esta seguro que desea cancelar el contrato? (responder: si o no)")
                    if (consultaCerrar.toLowerCase() == "si"){
                        alert("Se ha cancelado el contrato")
                        cancelar = true
                    }else{
                        alert("Se continuará con el contrato")
                    }
                break
                default:
                    alert("La opción ingresada es incorrecta")
                break
        }
        
            
    }
    function mostrarResumenContrato(){
        alert(`CONTRATATO N°: ${idIniciar.toString().padStart(6, '0')}    Fecha: ${fechaIniciar}
        Cliente: ${empresaIniciar.nombre}
        
        Lista de contratados:
ID   NOMBRE                SUELDO
${listarEmpleadoContrato(arrayAsignados)}
TOTAL:                           $${calcularPresupuesto(arrayAsignados)}.-`)
    }
}




//-------------------------------------------------------------------------------------------------------

//Funciones CONTRATACIONES con empleado
function agregarEmpleado(fondos, empleado, arrayContratados){
        if(empleado.contratado == true){
            alert(`El empleado ya se encuentra contratado`)
        }else if(arrayContratados.find((empleadoEnCont) => empleadoEnCont.id == empleado.id)){
            alert(`El empleado ya se está agregado al contrato`)
        }
        else{
            empleado.cantHoras = empleado.ingresarHoras()
            empleado.sueldoMensual = empleado.calcularSueldoMensual()
            empleado.sueldoTotal = empleado.calcularSueldoTotal()
            let pregunta = prompt(`Desea agregar al empleado ${empleado.nombre} ${empleado.apellido}? Por mes el costo aproximados de sus servicios son: $${empleado.sueldoTotal}`)
            if(pregunta.toLowerCase() == "si"){
                if(fondos >= empleado.sueldoTotal){
                    alert(`El empleado ${empleado.nombre} ${empleado.apellido} se ha agregado!`)
                    arrayContratados.push(empleado)
                    fondos -= empleado.sueldoTotal
                }else{
                    alert(`Los fondos no son suficientes para contratar al empleado`)
                }
        }else{
            alert(`No se ha contratado al empleado`)
    }
    }
    return fondos
}
function quitarEmpleado(fondos, empleado, array){
    let preguntaQuitar = prompt(`Esta seguro que desea quitar empleado ${empleado.nombre} ${empleado.apellido}?`)
    if (preguntaQuitar.toLowerCase() == "si"){
        let index = buscarIndex(array,empleado.id)
        if (index == -1){
        alert(`El empleado no está añadido al contrato`)
        }else{
        array.splice(index, 1)
        alert(`Se ha quitado empleado ${empleado.nombre} ${empleado.apellido}`)
        }
        fondos += empleado.sueldoTotal
    }else{
        alert(`No se han realizado cambios`)
    }
    return fondos
}
function listarEmpleadoContrato(array){
    let info = ""
    array.forEach(
        function(empleado){
            info = info+empleado.exponerEmpleadoContrato()+`
`
    })
    return info
}
function actualizarFondos(fondos, arrayContratados){
    let fondoAct= Number(prompt("Por favor actualice los fondos disponibles"))
    while(isNaN(fondoAct) || fondoAct <= 0 || fondoAct == ""){
        fondoAct = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese los fondos disponibles correctamente"))
    }
    while(fondoAct < calcularPresupuesto(arrayContratados)){
        fondoAct = Number(prompt(`Atención, los fondos no pueden ser menores al presupuesto de empleados a contratar ($${calcularPresupuesto(arrayContratados)}.-)! Por favor ingrese los fondos disponibles correctamente`))
    }
    fondos = fondoAct - calcularPresupuesto(arrayContratados)
    return fondos
}
// function descontratarEmpleado(fondos, empleado, array){
//     let preguntaDescontratar = prompt(`Esta seguro que desea descontratar a ${empleado.nombre} ${empleado.apellido}?`)
//     if (preguntaDescontratar.toLowerCase() == "si"){
//         empleado.contratado = false
//         let index = buscarIndex(array,empleado.id)
//         if (index == -1){
//         alert(`El empleado no está contratado`)
//         }else{
//         array.splice(index, 1)
//         alert(`Se ha descontratado ${empleado.nombre} ${empleado.apellido}`)
//         }
//         fondos += empleado.sueldoTotal
//     }else{
//         alert(`No se han realizado cambios`)
//     }
//     return fondos
// }
// function contratarEmpleado(fondos, empleado, arrayContratados){
//     if(empleado.contratado == true){
//         alert(`El empleado ya se encuentra contratado`)
//         }else{
//             let pregunta = prompt(`Desea contratar al empleado ${empleado.nombre} ${empleado.apellido}? Por mes el costo aproximados de sus servicios son: $${empleado.sueldoTotal}`)
//             if(pregunta.toLowerCase() == "si"){
//                 if(fondos >= empleado.sueldoTotal){
//                     alert(`El empleado ${empleado.nombre} ${empleado.apellido} se ha agregado!`)
//                     empleado.contratado = true
//                     arrayContratados.push(empleado)
//                     fondos -= empleado.sueldoTotal
//                 }else{
//                     alert(`Los fondos no son suficientes para contratar al empleado`)
//                 }
//         }else{
//             alert(`No se ha contratado al empleado`)
//     }
//     }
//     return fondos
// }
function calcularPresupuesto(array){
    let presupuesto = 0
    array.forEach((empleado)=>presupuesto += empleado.sueldoTotal)
    return presupuesto
}
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


//------------------------------------------------------------------------------------------------------

//Funciones de MENU EMPLEADOS
function menuEmpleados(){
    let cerrar = false
    while (cerrar == false){
        let opcionIniciar = ""
        if (arrayEmpleados.length > 0){
            opcionIniciar = "subMenuConEmpleados"
        }else if (arrayEmpleados.length <= 0){
            opcionIniciar = "subMenuSinEmpleados"
        }
        switch (opcionIniciar){
            case "subMenuConEmpleados":
                cerrar = subMenuConEmpleados()
            break
            case "subMenuSinEmpleados":
                cerrar = subMenuSinEmpleados()
            break
        }
    }
    alert("Se actualizará la base de datos de empleados si hubo cambios")

}
function subMenuSinEmpleados(){
    let finalizarMenu = false //dato bandera
    let empleado = arrayEmpleados[0]
    let configID = arrayEmpleados.length

    while(finalizarMenu == false && arrayEmpleados.length <= 0){ 
        let opcion = prompt(`EMPLEADOS || No hay empleados cargados 
    Ingrese la opción que desea:
        1 - Cargar nuevo empleado
        0 - Volver al menu principal`)
        switch(opcion){
            case "1":
                empleado = cargarEmpleado(configID)
                arrayEmpleados.push(empleado)
                configID ++
            break
            case "0":
                alert("Volviendo al menu principal")
                finalizarMenu = true
            break
            default:
                alert(`La opción seleccionada ${opcion} no es valida`)
            break
        }
    }
    return finalizarMenu

}
function subMenuConEmpleados(){
            let finalizarMenu = false //dato bandera
            let empleado = arrayEmpleados[0]
            let configID = arrayEmpleados.length
            let fondosDisponibles = 1000000
        
            while(finalizarMenu == false && arrayEmpleados.length >= 1){ 
                let opcion = prompt(`EMPLEADOS || Empleado seleccionado: ${empleado.nombre} ${empleado.apellido}
            Ingrese la opción que desea:
                1 - Seleccionar Empleado
                2 - Cargar nuevo empleado
                3 - Editar empleado
                4 - Ver Detalle
                5 - Mostrar empleados
                6 - Borrar empleado
                7 - Buscar empleados
                0 - Volver al menu principal`)
                switch(opcion){
                    case "1":
                        empleado = seleccionarEmpleado(arrayEmpleados)
                    break
                    case "2":
                        empleado = cargarEmpleado(configID)
                        arrayEmpleados.push(empleado)
                        configID ++
                    break
                    case "3":
                        //editar empleado
                        let volverMenu = false
                        while (volverMenu == false){
                            let opcionEditar = prompt(`Se editará empleado: ${empleado.nombre} ${empleado.apellido}
                    Ingrese la opción a editar:
                        1 - Nombre
                        2 - Apellido
                        3 - Cantidad de horas
                        0 - Volver`)
                                switch(opcionEditar){
                                    case "1":
                                        empleado.nombre = empleado.ingresarNombre()
                                    break
                                    case "2":
                                        empleado.apellido = empleado.ingresarApellido()
                                    break
                                    case "3":
                                        empleado.cantHoras = empleado.ingresarHoras()
                                        empleado.sueldoMensual = empleado.calcularSueldoMensual()
                                        empleado.sueldoTotal = empleado.calcularSueldoTotal()
                                    break
                                    case "0":
                                        volverMenu = true
                                    break
                                    default:
                                        alert(`La opción seleccionada ${opcionEditar} no es valida`)
                                    break
                                }
                        }
                    break
                    case "4":
                        empleado.mostrarDetalle()
                    break
                    case "5":
                            let volverAtras = false
                            while(volverAtras == false){
                                let opcionMostrar = prompt(`Ingrese la opcion que desea:
        1 - Mostrar por ID
        2 - Ordenar por menor sueldo
        3 - Ordenar por mayor sueldo
        4 - Ordenar por apellido alfabeticamente (A-Z)
        5 - Ordenar por apellido alfabeticamente (Z-A)
        0 - Volver`)
                                switch(opcionMostrar){
                                    case "1":                        
                                        alert(`Empleado segun ID: 
                                        
${mostrarEmpleadosLista(arrayEmpleados)}`)
                                    break
                                    case "2":
                                        alert(`Ordenado de menor a mayor sueldo:
        
${mostrarEmpleadosLista(ordenarMenorMayorSueldo(arrayEmpleados))}`)
                                    break
                                    case "3":
                                        alert(`Ordenado de menor a mayor sueldo:
        
${mostrarEmpleadosLista(ordenarMayorMenorSueldo(arrayEmpleados))}`)
                                    break
                                    case "4":
                                        alert(`Ordenado alfabeticamente por apellido (A-Z):
                                            
${mostrarEmpleadosLista(ordenarAlfaAz(arrayEmpleados))}`)
                                    break
                                    case "5":
                                        alert(`Ordenado alfabeticamente por apellido (Z-A):
                                            
${mostrarEmpleadosLista(ordenarAlfaZa(arrayEmpleados))}`)
                                    break
                                    case "0":
                                        volverAtras = true
                                    break
                                    default:
                                        alert(`La opción seleccionada ${opcionMostrar} no es valida`)
                                    break
        
                                }
                            }
                    break
                    case "6":
                        empleado = borrarEmpleado(empleado, arrayEmpleados)
                    break
                    case "7":
                        buscarEmpleado(arrayEmpleados)
                    break
                    case "0":
                        alert("Volviendo al menu principal")
                        finalizarMenu = true
                    break
                    default:
                        alert(`La opción seleccionada ${opcion} no es valida`)
                    break
                }
            }
            return finalizarMenu
}

//Funciones para empleados
function seleccionarEmpleado(array){
    let seleccionID = Number(prompt(`Por favor seleccione el empleado segun ID: 
                    
${mostrarEmpleadosLista(array)}`))
    let empleadoSeleccionado = array.find((empleado)=>empleado.id == seleccionID)
    while (empleadoSeleccionado == undefined){
        alert(`El valor ingresado no corresponde al ID de ningun empleado`)
        seleccionID = Number(prompt(`Por favor seleccione el empleado segun ID: 
                    
${mostrarEmpleadosLista(array)}`))
        empleadoSeleccionado = array.find((empleado)=>empleado.id == seleccionID)
    }
    return empleadoSeleccionado
}
function cargarEmpleado(id){
    id ++
    let nombreCarg = ingresarNombre()
    let apellidoCarg = ingresarApellido()
//    let valorHoraCarg = tasarHora()
//    let cantHorasCarg = ingresarHoras()
    let antiguedadCarg = ingresarAntiguedad()
    let ciudadCarg = ingresarCiudad()
    const empleado = new Empleado (id, nombreCarg, apellidoCarg, antiguedadCarg, ciudadCarg) 
    function ingresarNombre(){
        let nombre = prompt(`Por favor ingrese el nombre`)
        while(nombre == "" || isNaN(nombre) == false){
            if (nombre == ""){
                nombre = prompt(`Atención! El nombre no puede estar vacio, por favor ingrese el nombre correctamente`)
            }else if(isNaN(nombre) == false){
                nombre = prompt(`Atención! El nombre no puede ser un numero, por favor ingrese el nombre correctamente`)
            }
        }
        return nombre
    }
    function ingresarApellido(){
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
    // function tasarHora(){
    //     let valorHora = Number(prompt("Por favor ingrese el valor de la hora"))
    //     while(isNaN(valorHora) || valorHora <= 0 || valorHora == ""){
    //         valorHora = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese el valor de la hora"))
    //     }
    //     return valorHora
    // }
    // function ingresarHoras (){
    //     let horas = Number(prompt("Por favor ingrese la cantidad de horas trabajadas en el mes"))
    //     while(isNaN(horas) || horas <= 0 || horas == ""){
    //          horas = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese la cantidad de horas trabajadas en el mes correctamente"))
    //     }
    //     return horas
    // }
    function ingresarAntiguedad(){
        let antiguedad = Number(prompt(`Por favor ingrese los años de antigüedad`))
        while(isNaN(antiguedad) || antiguedad > 80 || antiguedad < 0 || antiguedad == ""){
            antiguedad = Number(prompt(`Atención, los años ingresados son incorrectos! Por favor ingrese los años de antigüedad`))
        }
        return antiguedad
    }
    function ingresarCiudad(){
        let ciudad = ""
        while (ciudad == ""){
            let ciudadOpcion = prompt(`Por favor ingrese el numero de la ciudad correspondiente
1 - CABA
2 - Buenos Aires
3 - La Plata
4 - Cordoba
5 - Santa Fe`)
            switch(ciudadOpcion){
                case "1": 
                    ciudad = "CABA"
                break
                case "2":
                    ciudad = "Buenos Aires"
                break
                case "3":
                    ciudad = "La Plata"
                break
                case "4":
                    ciudad = "Cordoba"
                break
                case "5":
                    ciudad = "Santa Fe"
                break
                default:
                    ciudad = ""
                    alert("El numero ingresado no corresponde a una ciudad")
                break
            }
        }
        return ciudad
    }
    return empleado
    
}
function buscarIndex(array, id){
    let index = array.findIndex(empleado=>empleado.id == id)
    return index
}
function mostrarEmpleadosLista(array){
    let info = ""
    array.forEach(
        function(empleado){
            info = info+empleado.exponerEmpleados()+`
`
    })
    return info

}
function buscarEmpleado(array){
    let infoBuscar = prompt(`Por favor ingrese el nombre o apellido del empleado`)
    let busqueda = array.filter((empleado)=>empleado.nombre.toLowerCase().includes(infoBuscar.toLowerCase()) || empleado.apellido.toLowerCase().includes(infoBuscar.toLowerCase))
    if (busqueda.length == 0){
        alert(`No se encontraron coincidencias`)
    }else{
        alert(`Los empleados encontrados son:

${mostrarEmpleadosLista(busqueda)}`)
    }
}
function borrarEmpleado(empleado, array){
    let preguntaBorrar = prompt(`Esta seguro que desea borrar el empleado ${empleado.nombre} ${empleado.apellido}?`)
    if (preguntaBorrar.toLowerCase() == "si"){
        let index = buscarIndex(array,empleado.id)
        array.splice(index, 1)
        alert(`Se ha borrado la información del empleado correctamente`)
        empleado = array[0]
    }else{
        alert(`No se ha borrado el empleado`)
    }
    localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
    return empleado
}

//Funciones EMPLEADOS ORDENAR
function ordenarMenorMayorSueldo(array){
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((a,b)=>a.sueldoTotal - b.sueldoTotal)
    return arrayMenorMayor
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
    return arrayAlfabetico
}
function ordenarMayorMenorSueldo(array){
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((b,a)=>a.sueldoTotal - b.sueldoTotal)
    return arrayMenorMayor
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
    return arrayAlfabetico
}



//-------------------------------------------------------------------------------------------------------

//Funciones para cargar desde STORAGE
function instanciarStorageEmpleados(array){
    if (localStorage.getItem("empleadosCargados")){
        console.log("Se cargan empleados desde Storage")
        let empleadosStorage = JSON.parse(localStorage.getItem("empleadosCargados"))
        empleadosStorage.forEach((empleado) => 
            {
            const empConClass = new Empleado (empleado.id, empleado.nombre, empleado.apellido, empleado.antiguedad, empleado.ciudad, empleado.imagen)
            array.push(empConClass)
            }
        )
    }else(
        console.log("No hay empleados cargados en el storage")
    )
}
function instanciarStorageEmpresas(array){
    if (localStorage.getItem("empresasCargadas")){
        console.log("Se cargan empresas desde Storage")
        let empresasStorage = JSON.parse(localStorage.getItem("empresasCargadas"))
        empresasStorage.forEach((empresa) => 
            {
            const empConClass = new EmpresaCliente (empresa.id, empresa.nombre, empresa.cuit, empresa.telefono, empresa.ciudad)
            array.push(empConClass)
            }
        )
    }else(
        console.log("No hay empresas cargadas en el storage")
    )
}
function precargarContratados(array){ //sin terminar
    let consulta = prompt("Desea continuar con las contrataciones realizadas?")
    if (consulta.toLowerCase() == "si"){
        alert("Se continuará con las contrataciones")
        instanciarStorage(array)
    }else{
        alert("Se iniciará un nuevo proceso de contrataciones")
    } 
}
