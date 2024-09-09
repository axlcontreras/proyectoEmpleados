// )) Realizar un sistema para sueldos de una empresa. Se le solicita que nombre y apellido de la persona, junto al valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa. Realice el algoritmo para calcular e informar el sueldo mensual del empleado/a, teniendo en cuenta que se le asigna un bono mensual de 5% del sueldo por año cada año de antigüedad (por 1 año de antigüedad plus de 5%, 2 años plus de 10%, 3 años plus de 15%... etc)
//HAY OBJETOS // HAY MENU 

class Empleado{
    constructor(nombre, apellido, cantHoras){
        this.nombre = nombre,//this.ingresarNombre(),
        this.apellido = apellido, //this.ingresarApellido(),
        this.valorHora = 5000,
        this.cantHoras = cantHoras, //this.ingresarHoras(),
        this.antiguedad = 0,
        // this.valorHora = this.tasarHora(),
        // this.cantHoras = this.ingresarHoras(),
        // this.antiguedad = this.ingresarAntiguedad(),
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
        alert(`${this.nombre} ${this.apellido}
            >Cantidad de horas trabajadas: ${this.cantHoras} horas
            >Por hora paga: $${this.valorHora}.-
            >Tiene una antiguedad de: ${this.antiguedad} año/s`)
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
        this.nombre = "",
        this.apellido = "",
        this.valorHora = "",
        this.cantHoras = "",
        this.antiguedad = "",
        this.sueldoMensual = "",
        this.bonoPorcentual = "",
        this.sueldoTotal = "",
        this.contratado = false,
        this.activo = false      
    }//pensar funcion borrar el empleado ACTUALMENTE NO FUNCIONAL
    //Este borrar se puede aplicar utilizando los metodos de los arrays!!!!
    exponerEmpleados(){
        console.log(this.nombre, this.apellido, this.sueldoTotal)
    }
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
                // if(empleado != "vacio"){
                //     alert(`Atención! Ya hay un empleado cargado. Borre el empleado actual con la opción 5 para poder cargar los datos nuevamente`)
                // }else{
                empleado = new Empleado()
                arrayEmpleados.push(empleado)
                // }
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
                }
            break
            case "5":
                alert(`El ultimo empleado cargado es: ${(arrayEmpleados[(arrayEmpleados.length)-1].nombre)} ${(arrayEmpleados[(arrayEmpleados.length)-1].apellido)}`)
                console.log(arrayEmpleados)
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
// menu()

const arrayEmpleados = []
let empleado1 = new Empleado ("Axel", "Contreras", 150)
let empleado2 = new Empleado ("Lucas", "Suarez", 120)
let empleado3 = new Empleado ("Ramon", "Ortigoza", 90)
let empleado4 = new Empleado ("Esteban", "Perez", 110)
let empleado5 = new Empleado ("Camilo", "Salomon", 45)

arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5)
console.log(arrayEmpleados)

let buscarSueldoFilter = arrayEmpleados.filter((empleado)=> empleado.sueldoTotal < 500000)
console.log(buscarSueldoFilter)

if(buscarSueldoFilter.length == 0){
    console.log(`No hay empleados que cobren menos de 300000`)
}else{
    buscarSueldoFilter.forEach(
        (empleado)=>empleado.exponerEmpleados()
    )
}

console.log("Probando modificar proyecto")









































// function ingresarNombre(){
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
// function ingresarApellido(){
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
// function ingresarAntiguedad(){
//     let antiguedad = Number(prompt(`Por favor ingrese los años de antigüedad`))
//     while(isNaN(antiguedad) || antiguedad > 80 || antiguedad < 0){// || antiguedad == "")(CONSULTAR SI ESTO ES == 0(IGUAL A CERO))
//         antiguedad = Number(prompt(`Atención, los años ingresados son incorrectos! Por favor ingrese los años de antigüedad`))
//     }
//     return antiguedad
// }
// function cargarEmpleado(){ //funcion crea objeto litereal NO CONTRUCTORA
//     let nombreCarg = ingresarNombre()
//     let apellidoCarg = ingresarApellido()
//     let valorHoraCarg = tasarHora()
//     let cantHorasCarg = ingresarHoras()
//     let antiguedadCarg = ingresarAntiguedad()
//     let EmpleadoCargado = {
//         nombre: nombreCarg,
//         apellido: apellidoCarg,
//         valorHora: valorHoraCarg,
//         cantHoras: cantHorasCarg,
//         antiguedad: antiguedadCarg
//     }
//     return EmpleadoCargado
// }
//CALCULAR SUELDO MENSUAL
// function calcularSueldoMensual(valorHora, horasTrabajadas){
//     let sueldoMensual = valorHora * horasTrabajadas
//     return sueldoMensual
// }
//CALCULAR BONO
// function calcularBonoPorcentual(antiguedad){
//     let bonoPorcentual =  1.0
//     for (let i = 0; i < antiguedad; i++){
//         bonoPorcentual= bonoPorcentual + 0.05
//     }
//     return bonoPorcentual
// }
//CALCULAR SUELDO MENSUAL MAS BONO
// function calcularSueldoTotal(sueldoMensual, porcentajeBono){
//     let sueldoTotal = sueldoMensual * porcentajeBono
//     return sueldoTotal
// }

// function mostrarSueldo(empleado){
//     let sueldoMes = calcularSueldoMensual(empleado.valorHora,empleado.cantHoras)
//     let sueldoTotal = calcularSueldoTotal(sueldoMes, calcularBonoPorcentual(empleado.antiguedad))
//     alert(`El sueldo de ${empleado.nombre} ${empleado.apellido} es: $${sueldoTotal.toFixed(2)}.- `)
//     return sueldoTotal
// }
// function mostrarDetalle(empleado){
//     alert(`${empleado.nombre} ${empleado.apellido}
//         >Cantidad de horas trabajadas: ${empleado.cantHoras} horas
//         >Por hora paga: $${empleado.valorHora}.-
//         >Tiene una antiguedad de: ${empleado.antiguedad} año/s`)
// }




