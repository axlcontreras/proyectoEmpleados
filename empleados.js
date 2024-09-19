// )) Realizar un sistema para sueldos de una empresa. Se le solicita que nombre y apellido de la persona, junto al valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa. Realice el algoritmo para calcular e informar el sueldo mensual del empleado/a, teniendo en cuenta que se le asigna un bono mensual de 5% del sueldo por año cada año de antigüedad (por 1 año de antigüedad plus de 5%, 2 años plus de 10%, 3 años plus de 15%... etc)
//HAY OBJETOS // HAY MENU

class Empleado{
    constructor(id, nombre, apellido, cantHoras){
        this.id = id, //chequear como asignar una id mejor
        this.nombre = nombre,//this.ingresarNombre(),
        this.apellido = apellido, //this.ingresarApellido(),
        this.valorHora = 5000,
        this.cantHoras = cantHoras, //this.ingresarHoras(),
        this.antiguedad = 0, // this.ingresarAntiguedad()
        this.sueldoMensual = this.calcularSueldoMensual(),
        this.bonoPorcentual = this.calcularBonoPorcentual(),
        this.sueldoTotal = this.calcularSueldoTotal(),
        this.contratado = false
    }//CONSULTAR SI DECLARA CON LET VAR CONST LOS ATRIBUTOS
    ingresarNombre(){
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
    ingresarApellido(){
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
    tasarHora(){
        let valorHora = Number(prompt("Por favor ingrese el valor de la hora"))
        while(isNaN(valorHora) || valorHora <= 0 || valorHora == ""){
            valorHora = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese el valor de la hora"))
        }
        return valorHora
    }
    ingresarHoras (){
        let horas = Number(prompt("Por favor ingrese la cantidad de horas trabajadas en el mes"))
        while(isNaN(horas) || horas <= 0 || horas == ""){
             horas = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese la cantidad de horas trabajadas en el mes correctamente"))
        }
        return horas
    }
    ingresarAntiguedad(){
        let antiguedad = Number(prompt(`Por favor ingrese los años de antigüedad`))
        while(isNaN(antiguedad) || antiguedad > 80 || antiguedad < 0){
            antiguedad = Number(prompt(`Atención, los años ingresados son incorrectos! Por favor ingrese los años de antigüedad`))
        }
        return antiguedad
    } 
    calcularSueldoMensual(){
        let sueldoMensual = this.valorHora * this.cantHoras
        return sueldoMensual
    }
    calcularBonoPorcentual(){
        let bonoPorcentual =  1.0
        for (let i = 0; i < this.antiguedad; i++){
            bonoPorcentual= bonoPorcentual + 0.05
        }
        return bonoPorcentual
    }
    calcularSueldoTotal(){
        let sueldoTotal = this.sueldoMensual * this.bonoPorcentual
        return sueldoTotal
    }
    mostrarSueldo(){
        alert(`El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldoTotal.toFixed(2)}.- `)

    }
    mostrarDetalle(){
        alert(`${this.nombre} ${this.apellido}    ID: ${this.id}
            >Horas trabajadas en el mes: ${this.cantHoras} horas
            >Valor de hora: $${this.valorHora}.-
            >Tiene una antiguedad de: ${this.antiguedad} año/s
            >El sueldo mensual es: $${this.sueldoMensual}
            >Empleado  contratado: ${this.contratado}`)
    }
    exponerEmpleados(){
        let info = (`ID: ${this.id}.......Nombre: ${this.nombre} ${this.apellido} || Sueldo: $${this.sueldoTotal}`)
        return info
    }
}
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
    let cantHorasCarg = ingresarHoras()
//    let antiguedadCarg = ingresarAntiguedad()
    const empleado = new Empleado (id, nombreCarg, apellidoCarg, cantHorasCarg) 
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
    function ingresarHoras (){
        let horas = Number(prompt("Por favor ingrese la cantidad de horas trabajadas en el mes"))
        while(isNaN(horas) || horas <= 0 || horas == ""){
             horas = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese la cantidad de horas trabajadas en el mes correctamente"))
        }
        return horas
    }
    // function ingresarAntiguedad(){
    //     let antiguedad = Number(prompt(`Por favor ingrese los años de antigüedad`))
    //     while(isNaN(antiguedad) || antiguedad > 80 || antiguedad < 0){
    //         antiguedad = Number(prompt(`Atención, los años ingresados son incorrectos! Por favor ingrese los años de antigüedad`))
    //     }
    //     return antiguedad
    // }
    return empleado
    
}
function ordenarMenorMayorSueldo(array){
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((a,b)=>a.sueldoTotal - b.sueldoTotal)
    return arrayMenorMayor
}
function ordenarAlfaAz(array){
    let arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a, b)=>{
        if (a.nombre < b.nombre){
            return -1
        }if (a.nombre < b.nombre){
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
        if (a.nombre < b.nombre){
            return -1
        }if (a.nombre < b.nombre){
            return 1
        }
        return 0
    })
    return arrayAlfabetico
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
function ingresarPresupuesto(totalContratos){
    let presupuesto = Number(prompt("Por favor actualice el presupuesto disponible"))
    while(isNaN(presupuesto) || presupuesto <= 0 || presupuesto == ""){
         presupuesto = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese el presupuesto disponible correctamente"))
    }
    return presupuesto - totalContratos
}
function borrarEmpleado(empleado, array){
    let preguntaBorrar = prompt(`Esta seguro que desea borrar el empleado ${empleado.nombre} ${empleado.apellido}?`)
    if (preguntaBorrar.toLowerCase() == "si"){
        let index = buscarIndex(array,empleado.id)
        console.log(empleado.id)
        array.splice(index, 1)
        alert(`Se ha borrado la información del empleado correctamente`)
        empleado = array[0]
    }else{
        alert(`No se ha borrado el empleado`)
    }
    return empleado
}
function contratarEmpleado(presupuestoDisponible, empleado, arrayContratados){
    if(empleado.contratado == true){
        alert(`El empleado ya se encuentra contratado`)
        }else{
            let pregunta = prompt(`Desea contratar al empleado ${empleado.nombre} ${empleado.apellido}? Por mes el costo aproximados de sus servicios son: $${empleado.sueldoTotal}`)
            if(pregunta.toLowerCase() == "si"){
                if(presupuestoDisponible >= empleado.sueldoTotal){
                    alert(`Excelente, el empleado ${empleado.nombre} ${empleado.apellido} ha si contratado!`)
                    empleado.contratado = true
                    presupuestoDisponible = presupuestoDisponible - empleado.sueldoTotal
                    arrayContratados.push(empleado)
                    gastado += empleado.sueldoMensual
                    console.log(gastado)
                }else{
                    alert(`El presupuesto no es suficiente para contratar al empleado`)
                }
        }else{
            alert(`No se ha contratado al empleado`)
    }
    }
    return presupuestoDisponible
}
function calcularGastado(array){
    let gastado = 0
    array.forEach((empleado)=>gastado += empleado.sueldoMensual)
    return gastado
}
function menuSinEmpleado(){
    let finalizarMenu = false //dato bandera
    let empleado = arrayEmpleados[0]
    let configID = arrayEmpleados.length

    while(finalizarMenu == false){ 
        let opcion = prompt(`EMPLEADOS || No hay empleados Cargados 
    Ingrese la opción que desea:
        1 - Cargar nuevo empleado
        0 - Salir del menú`)
        switch(opcion){
            case "1":
                empleado = cargarEmpleado(configID)
                arrayEmpleados.push(empleado)
                configID ++
            break
                //buscar
                //menu buscar: buscar por nombre/apellido
                //buscar 
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
    let presupuestoDisponible = 1000000

    while(finalizarMenu == false){ 
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
        9 - **sin usar**
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
                4 - Contratación (Solo si está contratado)
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
                            case "4":
                                let preguntaDescontratar = prompt(`Esta seguro que desea descontratar a ${empleado.nombre} ${empleado.apellido}?`)
                                if (preguntaDescontratar.toLowerCase() == "si"){
                                    empleado.contratado = false
                                    let index = buscarIndex(empleadosContratados,empleado.id)
                                    if (index == -1){
                                    alert(`El empleado no está contratado`)
                                    }else{
                                    empleadosContratados.splice(index, 1)
                                    alert(`Se ha descontratado ${empleado.nombre} ${empleado.apellido}`)
                                    }
                                }
                                alert(`No se han realizado cambios`)
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
                    let opcionContratar = prompt(`El presupuesto disponible es:            $${presupuestoDisponible}     
Empleado: ${empleado.nombre} ${empleado.apellido}                   ID (${empleado.id})
Ingrese la opcion que desea:
        1 - Modificar presupuesto disponible
        2 - Contratar
        3 - Mostrar empleados contratados
        4 - Total gastado
        0 - Volver atras`)
                    switch (opcionContratar){
                        case "1":
                            presupuestoDisponible = ingresarPresupuesto(gastado)
                        break
                        case "2":
                            presupuestoDisponible = contratarEmpleado(presupuestoDisponible, empleado, empleadosContratados)
                        break
                        case "3":
                            alert(`Los empleados contratados son: 
                                
${mostrarEmpleadosLista(empleadosContratados)}
Presupuesto mensual de contratos: $${calcularGastado(empleadosContratados)}`)
                        break
                        case "4":
                            alert(`El costo total de los contratos es: $${gastado}`)
                        break
                        case "0":
                            volverAtras2 = true
                        break
                    }
                }
            break
            case "9":
                //buscar
                //menu buscar: buscar por nombre/apellido
                //buscar 
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
// function iniciar(){
//     let largoDeArray = arrayEmpleados.length
//     let cerrar = false
//     while (cerrar == false){
//         if (largoDeArray > 0){
//             cerrar = menu() //mientras haya almenos 1 empleado mostar menu normal
//             largoDeArray = arrayEmpleados.length
//         }else if(largoDeArray == 0){
//             cerrar = menuSinEmpleado()
//             largoDeArray = arrayEmpleados.length
//         }
//     }
// }
function iniciar(){
    let largoDeArray = arrayEmpleados.length
    let cerrar = false
    while (cerrar == false){
        while (largoDeArray > 0){
            cerrar = menu()
            largoDeArray = arrayEmpleados.length
        }
       while(largoDeArray <= 0){
            cerrar = menuSinEmpleado()
            largoDeArray = arrayEmpleados.length
            console.log(largoDeArray)
        }
    }
}

const arrayEmpleados = []
const empleadosContratados = []

let gastado = 0

const empleado1 = new Empleado (1, "Andres", "Martinez", 110)
const empleado2 = new Empleado (2, "Daniel", "Fernandez", 150)
const empleado3 = new Empleado (3, "Gustavo", "Kupinski", 95)
const empleado4 = new Empleado (4, "Daniel", "Buira", 63)
const empleado5 = new Empleado (5, "Miguel", "Rodriguez", 45)
// arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5)


iniciar()
console.log(`Los empleados cargados son:`)
console.log(arrayEmpleados)
console.log(`Los empleados contratados son:`)
console.log(empleadosContratados)

//IDEAS PARA AGREGAR:
// ------------ Función editar empleado >Nombre > Apellido >Cant Horas (SUBMENU) REALIZADO!!
// ------------ Función contratar empleado con un monto inincial fijo (se puede editar)ir restando a medida que se contratan empleados. REALIZADO!!
// ------------ Mostrar empleados contratados. REALIZADO!!
// ------------ Pensar y crear una función que sirva para mostrar. REALIZADO!!
// ------------ Pensar forma (seguramente if) para cuando no haya empleados 
// ------------ Pensar verificacion para cuando en seleccion de empleados esté mal seleccionado REALIZADO!!
// ------------ Que pasa si el ideliminar ingresado no existe, hacer condicional que valide eso. REALIZADO!! 
// ------------ Pensar forma de crear id que no se repita REALIDAZO!!}
// ------------ Utilizar funciones de buscar


