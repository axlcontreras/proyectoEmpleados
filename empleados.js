// )) Realizar un sistema para sueldos de una empresa. Se le solicita que nombre y apellido de la persona, junto al valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa. Realice el algoritmo para calcular e informar el sueldo mensual del empleado/a, teniendo en cuenta que se le asigna un bono mensual de 5% del sueldo por año cada año de antigüedad (por 1 año de antigüedad plus de 5%, 2 años plus de 10%, 3 años plus de 15%... etc)
//HAY OBJETOS // HAY MENU 

class Empleado{
    constructor(nombre, apellido, cantHoras){
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
    // ingresarNombre(){
    //     let nombre = prompt(`Por favor ingrese el nombre`)
    //     while(nombre == "" || isNaN(nombre) == false){
    //         if (nombre == ""){
    //             nombre = prompt(`Atención! El nombre no puede estar vacio, por favor ingrese el nombre correctamente`)
    //         }else if(isNaN(nombre) == false){
    //             nombre = prompt(`Atención! El nombre no puede ser un numero, por favor ingrese el nombre correctamente`)
    //         }
    //     }
    //     return nombre
    // }
    // ingresarApellido(){
    //     let apellido = prompt(`Por favor ingrese el apellido`)
    //     while(apellido == "" || isNaN(apellido) == false){
    //         if (apellido == ""){
    //             apellido = prompt(`Atención! El apellido no puede estar vacio, por favor ingrese el apellido correctamente`)
    //         }else if(isNaN(apellido) == false){
    //             apellido = prompt(`Atención! El apellido no puede ser un numero, por favor ingrese el apellido correctamente`)
    //         }
    //     }
    //     return apellido
    // }
    // tasarHora(){
    //     let valorHora = Number(prompt("Por favor ingrese el valor de la hora"))
    //     while(isNaN(valorHora) || valorHora <= 0 || valorHora == ""){
    //         valorHora = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese el valor de la hora"))
    //     }
    //     return valorHora
    // }
    // ingresarHoras (){
    //     let horas = Number(prompt("Por favor ingrese la cantidad de horas trabajadas en el mes"))
    //     while(isNaN(horas) || horas <= 0 || horas == ""){
    //          horas = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese la cantidad de horas trabajadas en el mes correctamente"))
    //     }
    //     return horas
    // }
    // ingresarAntiguedad(){
    //     let antiguedad = Number(prompt(`Por favor ingrese los años de antigüedad`))
    //     while(isNaN(antiguedad) || antiguedad > 80 || antiguedad < 0){
    //         antiguedad = Number(prompt(`Atención, los años ingresados son incorrectos! Por favor ingrese los años de antigüedad`))
    //     }
    //     return antiguedad
    // } //TODO ESTO SE COMENTÓ PORQUE HAY UNA FUNCION FUERA DE LA CLASE QUE CARGA UN EMPLEADO
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
        alert(`${this.nombre} ${this.apellido}
            >Cantidad de horas trabajadas: ${this.cantHoras} horas
            >Por hora paga: $${this.valorHora}.-
            >Tiene una antiguedad de: ${this.antiguedad} año/s
            >Empleado contratado: ${this.contratado}`)
    }
    contratarEmpleado(){
        let pregunta = prompt(`Desea contratar al empleado? Por mes el costo aproximados de sus servicios son: $${this.sueldoTotal}`)
        if(pregunta.toLowerCase() == "si"){
            let presupuestoDisponible = Number(prompt(`Cual es su presupuesto disponible? recorda que mensualmente costaria alrededor de: $${this.sueldoTotal}`))
            if(presupuestoDisponible >= this.sueldoTotal){
                alert(`Excelente, el empleado ${this.nombre} ${this.apellido} ha si contratado!`)
                this.contratado = true
            }else{
                alert(`El presupuesto ingresado no es suficiente para contratar al empleado`)
            }
        }else{
            alert(`No se ha contratado al empleado`)
        }
    }
    borrarEmpleado(){
    }//pensar funcion borrar el empleado ACTUALMENTE NO FUNCIONAL
    //Este borrar se puede aplicar utilizando los metodos de los arrays!!!! 
    exponerEmpleados(){
        console.log(this.nombre, this.apellido, this.sueldoTotal)
    }
}
function cargarEmpleado(){
    let nombreCarg = ingresarNombre()
    let apellidoCarg = ingresarApellido()
//    let valorHoraCarg = tasarHora()
    let cantHorasCarg = ingresarHoras()
//    let antiguedadCarg = ingresarAntiguedad()
    const empleado = new Empleado (nombreCarg, apellidoCarg, cantHorasCarg) 
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


function menu(){
    let finalizarMenu = false
    let empleado = "vacio"
    while(finalizarMenu ==false){
        let opcion = prompt(`CARGA DE EMPLEADOS
                            Ingrese la opción que desea:
                            1 - Cargar empleado
                            2 - Mostrar Sueldo 
                            3 - Mostrar Detalle
                            4 - Contratar empleado
                            5 - Mostrar ultimo empleado cargado
                            6 - Borrar empleado
                            0 - Salir del menú`)
        switch(opcion){
            case "1":
                empleado = cargarEmpleado()
                arrayEmpleados.push(empleado)
            break
            case "2":
                if(empleado == "vacio"){
                    alert(`Atención! No está cargado el empleado`)
                }else{
                    empleado.mostrarSueldo()
                }
            break
            case "3":
                if(empleado == "vacio"){
                    alert(`Atención! No está cargado el empleado`)
                }else{
                    empleado.mostrarDetalle()
                }
            break
            case "4":
                if(empleado == "vacio"){
                    alert(`Atención! No está cargado el empleado`)
                }else if(empleado.contratado == true){
                    alert(`El empleado se contrató previamente`)
                }else{
                    empleado.contratarEmpleado()
                    empleadosContratados.push(empleado)
                }
            break
            case "5":
                alert(`El ultimo empleado cargado es: ${(arrayEmpleados[(arrayEmpleados.length)-1].nombre)} ${(arrayEmpleados[(arrayEmpleados.length)-1].apellido)}`)
            break
            case "6":
                let preguntaBorrar = prompt(`Esta seguro que desea borrar el empleado?`)
                if (preguntaBorrar.toLowerCase() == "si"){
                    empleado = "vacio"
                    alert(`Se ha borrado la información del empleado correctamente`)
                }else{
                    alert(`No se ha borrado el empleado`)
                }
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
}

const arrayEmpleados = []
const empleadosContratados = []

const empleado1 = new Empleado ("Axel", "Contreras", 150)
const empleado2 = new Empleado ("Lucas", "Suarez", 120)
const empleado3 = new Empleado ("Ramon", "Ortigoza", 90)
const empleado4 = new Empleado ("Esteban", "Perez", 110)
const empleado5 = new Empleado ("Camilo", "Salomon", 45)
arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5)

//Cargar empleados contratados 
// arrayEmpleados.forEach(function (empleado){
//     if(empleado.contratado == true){
//         empleadosContratados.push(empleado)
//         console.log(`Se contrató empleado: ${empleado}`)
//     }
// })

menu()
console.log(arrayEmpleados)
console.log(empleadosContratados)
console.log(`Los empleados contratados son: ${empleadosContratados}`)

//BUSCAR CON FILTER 
// let buscarSueldoFilter = arrayEmpleados.filter((empleado)=> empleado.sueldoTotal < 500000)
// console.log(buscarSueldoFilter)

// if(buscarSueldoFilter.length == 0){
//     console.log(`No hay empleados que cobren menos de 500000`)
// }else{
//     buscarSueldoFilter.forEach(
//         (empleado)=>empleado.exponerEmpleados()
//     )
// }