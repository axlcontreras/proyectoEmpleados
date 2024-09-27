//Funciones dentro de MENU EMPLEADOS GRAL

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

//Funciones dentro de MENU EMPLEADOS ORDENAR
function ordenarMenorMayorSueldo(array){
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((a,b)=>a.sueldoTotal - b.sueldoTotal)
    return arrayMenorMayor
}
function ordenarAlfaAz(array){
    let arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a, b)=>{
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()){
            return -1
        }if (a.nombre.toLowerCase() < b.nombre.toLowerCase()){
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
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()){
            return -1
        }if (a.nombre.toLowerCase() < b.nombre.toLowerCase()){
            return 1
        }
        return 0
    })
    return arrayAlfabetico
}

//Funciones dentro de MENU EMPLEADOS CONTRATAR
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
function descontratarEmpleado(fondos, empleado, array){
    let preguntaDescontratar = prompt(`Esta seguro que desea descontratar a ${empleado.nombre} ${empleado.apellido}?`)
    if (preguntaDescontratar.toLowerCase() == "si"){
        empleado.contratado = false
        let index = buscarIndex(array,empleado.id)
        if (index == -1){
        alert(`El empleado no está contratado`)
        }else{
        array.splice(index, 1)
        alert(`Se ha descontratado ${empleado.nombre} ${empleado.apellido}`)
        }
        fondos += empleado.sueldoTotal
    }else{
        alert(`No se han realizado cambios`)
    }
    return fondos
}
function contratarEmpleado(fondos, empleado, arrayContratados){
    if(empleado.contratado == true){
        alert(`El empleado ya se encuentra contratado`)
        }else{
            let pregunta = prompt(`Desea contratar al empleado ${empleado.nombre} ${empleado.apellido}? Por mes el costo aproximados de sus servicios son: $${empleado.sueldoTotal}`)
            if(pregunta.toLowerCase() == "si"){
                if(fondos >= empleado.sueldoTotal){
                    alert(`Excelente, el empleado ${empleado.nombre} ${empleado.apellido} ha si contratado!`)
                    empleado.contratado = true
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
function calcularPresupuesto(array){
    let presupuesto = 0
    array.forEach((empleado)=>presupuesto += empleado.sueldoTotal)
    return presupuesto
}

//Funciones de INICIO de aplicación
function iniciar(){
    let cerrar = false
    while (cerrar == false){
        let opcionIniciar = "1"
        if (arrayEmpleados.length > 0){
            opcionIniciar = "menuFull"
        }else if (arrayEmpleados.length <= 0){
            opcionIniciar = "menuSinEmpleado"
        }
        switch (opcionIniciar){
            case "menuFull":
                cerrar = menu()
                break
                case "menuSinEmpleado":
                    cerrar = menuSinEmpleado()
                    break
                }
            }
    localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
}
function menuSinEmpleado(){
    let finalizarMenu = false //dato bandera
    let empleado = arrayEmpleados[0]
    let configID = arrayEmpleados.length

    while(finalizarMenu == false && arrayEmpleados.length <= 0){ 
        let opcion = prompt(`EMPLEADOS || No hay empleados cargados 
    Ingrese la opción que desea:
        1 - Cargar nuevo empleado
        0 - Salir del menú`)
        switch(opcion){
            case "1":
                empleado = cargarEmpleado(configID)
                arrayEmpleados.push(empleado)
                configID ++
            break
            case "0":
                alert("Gracias por utilizar la aplicación")
                finalizarMenu = true
            break
            default:
                alert(`La opción seleccionada ${opcion} no es valida`)
            break
        }
    }
    return finalizarMenu

}
function menu(){
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
                4 - Ver Sueldo
                5 - Ver Detalle
                6 - Mostrar empleados
                7 - Borrar empleado
                8 - Contratar
                9 - Buscar empleados
                0 - Salir del menú`)
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
                        0 - Volver al menu principal`)
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
                        empleado.mostrarSueldo()
                    break
                    case "5":
                        empleado.mostrarDetalle()
                    break
                    case "6":
                            let volverAtras = false
                            while(volverAtras == false){
                                let opcionMostrar = prompt(`Ingrese la opcion que desea:
                                    1 - Mostrar por ID
                                    2 - Ordenar por menor sueldo
                                    3 - Ordenar por mayor sueldo
                                    4 - Ordenar alfabeticamente (A-Z)
                                    5 - Ordenar alfabeticamente (Z-A)
                                    0 - Volver al menu principal`)
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
                                        alert(`Ordenado alfabeticamente (A-Z):
                                            
${mostrarEmpleadosLista(ordenarAlfaAz(arrayEmpleados))}`)
                                    break
                                    case "5":
                                        alert(`Ordenado alfabeticamente (Z-A):
                                            
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
                    case "7":
                        empleado = borrarEmpleado(empleado, arrayEmpleados)
                    break
                    case "8":
                        let volverAtras2 = false
                        while (volverAtras2 == false){
                            let opcionContratar = prompt(`Los fondos disponibles son:            $${fondosDisponibles}     
        Empleado: ${empleado.nombre} ${empleado.apellido}                   ID (${empleado.id})
        Ingrese la opcion que desea:
                1 - Contratar
                2 - Descontratar
                3 - Mostrar empleados contratados
                4 - Modificar presupuesto disponible
                0 - Volver atras`)
                            switch (opcionContratar){
                                case "1":
                                    fondosDisponibles = contratarEmpleado(fondosDisponibles, empleado, empleadosContratados)
                                break
                                case "2":
                                    fondosDisponibles = descontratarEmpleado(fondosDisponibles, empleado, empleadosContratados)
                                break
                                case "3":
                                    alert(`Los empleados contratados son: 
                                        
${mostrarEmpleadosLista(empleadosContratados)}

Presupuesto mensual de contratos: $${calcularPresupuesto(empleadosContratados)}`)
                                break
                                case "4":
                                    fondosDisponibles = actualizarFondos(fondosDisponibles, empleadosContratados)
                                break
                                case "0":
                                    volverAtras2 = true
                                break
                            }
                        }
                    break
                    case "9":
                        buscarEmpleado(arrayEmpleados)
                    break
                    case "0":
                        alert("Gracias por utilizar la aplicación")
                        finalizarMenu = true
                    break
                    default:
                        alert(`La opción seleccionada ${opcion} no es valida`)
                    break
                }
            }
            return finalizarMenu
}

//Funciones para cargar desde STORAGE
function instanciarStorage(array){
    if (localStorage.getItem("empleadosCargados")){
        console.log("Se cargan empleados desde Storage")
        let empleadosStorage = JSON.parse(localStorage.getItem("empleadosCargados"))
        empleadosStorage.forEach((empleado) => 
            {
            const empConClass = new Empleado (empleado.id, empleado.nombre, empleado.apellido, empleado.antiguedad, empleado.ciudad)
            array.push(empConClass)
            }
        )
    }else(
        console.log("No hay empleados cargados en el storage")
    )
}
function precargarContratados(array){
    let consulta = prompt("Desea continuar con las contrataciones realizadas?")
    if (consulta.toLowerCase() == "si"){
        alert("Se continuará con las contrataciones")
        instanciarStorage(array)
    }else{
        alert("Se iniciará un nuevo proceso de contrataciones")
    } 
}