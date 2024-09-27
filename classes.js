class Empleado{
    constructor(id, nombre, apellido, antiguedad, ciudad){
        this.id = id, //chequear como asignar una id mejor
        this.nombre = nombre,//this.ingresarNombre(),
        this.apellido = apellido, //this.ingresarApellido(),
        this.cantHoras = 1, //this.ingresarHoras(),
        this.antiguedad = antiguedad,
        this.experiencia = this.indicarExperiencia(),
        this.bonoPorcentual = this.calcularBonoPorcentual(), // a partir de los 10 años de experiencia
        this.valorHora = this.tasarHora(),
        this.sueldoMensual = this.calcularSueldoMensual(),
        this.sueldoTotal = this.calcularSueldoTotal(),
        this.contratado = false,
        this.ciudad = ciudad
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
    indicarExperiencia(){
        let experiencia = "Trainee"
            if(this.antiguedad == 0){
                experiencia = "Trainee"
            }else if(this.antiguedad == 1){
                experiencia = "Junior"
            }else if(this.antiguedad > 1 && this.antiguedad < 4){
                experiencia = "Semi-Senior"
            }else if(this.antiguedad >= 4){
                experiencia = "Senior"
            }
        return experiencia
    } 
    tasarHora(){
        let valorHora = 0
        let exp = this.experiencia
        if(exp == "Trainee"){
            valorHora = 2500
        }else if(exp == "Junior"){
            valorHora = 5000
        }else if(exp == "Semi-Senior"){
            valorHora = 8000
        }else if(exp == "Senior"){
            valorHora = 10000 * this.bonoPorcentual
        }else{
            console.log(`tasar hora no ingresó a tra, jun, ssr, ni sr siendo que experiencia es: ${exp}`)
        }
        return valorHora
    }
    ingresarCiudad(){
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
    calcularSueldoMensual(){
        let sueldoMensual = this.valorHora * this.cantHoras
        return sueldoMensual
    }
    calcularBonoPorcentual(){
        let bonoPorcentual =  1.0
        if (this.antiguedad >= 10){
            for (let i = 10; i < this.antiguedad; i++){
                bonoPorcentual= bonoPorcentual + 0.05
            }
        }
        return bonoPorcentual

    }
    calcularSueldoTotal(){
        let sueldoTotal = this.sueldoMensual
        return sueldoTotal
    }
    mostrarSueldo(){
        alert(`El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldoTotal.toFixed(2)}.- `)

    }
    infoContratado(){
        let contratado = ""
        if (this.contratado == true){
            contratado = "Contratado"
        }else{
            contratado = "No contratado"
        }
        return contratado
    }
    mostrarDetalle(){
        let contratado = this.infoContratado()
        alert(`${this.nombre} ${this.apellido}    ID: ${this.id}
            >Tiene una antiguedad de: ${this.antiguedad} año/s
            >El empleado es: ${this.experiencia}
            >Valor de hora: $${this.valorHora.toFixed(2)}.-
            >El sueldo mensual aprox. es: $${this.sueldoTotal.toFixed(2)}
            >Ciudad: ${this.ciudad}
            >Estado: ${contratado}`)
    }
    exponerEmpleados(){
        let info = (`ID: ${this.id}| Nombre: ${this.nombre} ${this.apellido} | Valor Hora: $${this.valorHora.toFixed(2)}.-`)
        return info
    }
}

class EmpresaCliente{
    constructor(id, nombre, cuil, tel, ciudad){
        this.id = 1
        this.nombre = this.ingreseNombreEmpresa()
        this.cuit = this.ingreseCUILEmpresa()
        this.telefono = this.ingreseTelefonoEmpresa()
        this.ciudad = this.ingreseCiudad()
    }
}



