class Empleado{
    constructor(id, nombre, apellido, antiguedad, ciudad, img){
        this.id = id, //chequear como asignar una id mejor
        this.nombre = nombre,//this.ingresarNombre(),
        this.apellido = apellido, //this.ingresarApellido(),
        this.cantHoras = 1, //this.ingresarHoras(),
        this.antiguedad = antiguedad,
        this.perfil = this.indicarPerfil(),
        this.bonoPorcentual = this.calcularBonoPorcentual(), // a partir de los 10 años de experiencia
        this.valorHora = this.tasarHora(),
        this.sueldoMensual = this.calcularSueldoMensual(),
        this.sueldoTotal = this.calcularSueldoTotal(),
        this.contratado = false,
        this.ciudad = ciudad,
        // this.contrato = 0
        // this.empresaAsignada = contrato.empresaContrato,
        this.imagen = img
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
        let horas = Number(prompt("Por favor ingrese la cantidad de horas que el empleado trabajará en el mes"))
        while(isNaN(horas) || horas <= 0 || horas == ""){
             horas = Number(prompt("Atención, el valor ingresado no es válido! Por favor ingrese la cantidad de horas que el empleado trabajará en el mes correctamente"))
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
    indicarPerfil(){
        let perfil = "Trainee"
            if(this.antiguedad == 0){
                perfil = "Trainee"
            }else if(this.antiguedad > 0 && this.antiguedad <= 2){
                perfil = "Junior"
            }else if(this.antiguedad > 2 && this.antiguedad < 6){
                perfil = "Semi-Senior"
            }else if(this.antiguedad >= 6){
                perfil = "Senior"
            }
        return perfil
    } 
    tasarHora(){
        let valorHora = 0
        let exp = this.perfil
        if(exp == "Trainee"){
            valorHora = 2500
        }else if(exp == "Junior"){
            valorHora = 5000
        }else if(exp == "Semi-Senior"){
            valorHora = 8000
        }else if(exp == "Senior"){
            valorHora = 10000 * this.bonoPorcentual
        }else{
            console.log(`tasar hora no ingresó a tra, jun, ssr, ni sr siendo que pefil es: ${exp}`)
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
        return bonoPorcentual.toFixed(2)

    }
    calcularSueldoTotal(){
        let sueldoTotal = this.sueldoMensual
        return sueldoTotal
    }
    mostrarSueldo(){
        alert(`El sueldo bruto de ${this.nombre} ${this.apellido} por 160hs mensuales es: $${(this.sueldoTotal*160).toFixed(2)}.- `)

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
        alert(`            ID: ${this.id}                EMPLEADO: ${this.nombre} ${this.apellido}    
            >Antigüedad: ${this.antiguedad} año/s
            >Perfil: ${this.perfil}
            >Valor de hora: $${this.valorHora.toFixed(2)}.-
            >Sueldo mensual(160hs): $${(this.sueldoTotal*160).toFixed(2)}.-
            >Ciudad: ${this.ciudad}
            >Estado: ${this.infoContratado()}`)
    }
    exponerEmpleados(){
        let info = (`ID: ${this.id}| Nombre: ${this.nombre} ${this.apellido} | Valor Hora: $${this.valorHora.toFixed(2)}.-`)
        return info
    }
    exponerEmpleadoContrato(){
        let info = (`${this.id}     ${this.nombre} ${this.apellido}          $${this.sueldoTotal}`)
        return info
    }
}

class EmpresaCliente{
    constructor(id, nombre, cuit, tel, ciudad){
        this.id = id,
        this.nombre = nombre,
        this.cuit = cuit,
        this.telefono = tel,
        this.ciudad = ciudad,
        this.contratos = []
    }

    ingresarNombre(){
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
    ingresarCuit (){
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
    ingresarTel(){
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
    exponerEmpresa(){
        let infoEmpresa = (`ID:....${this.id}       Empresa: ${this.nombre}  CUIT: ${this.cuit}`)
        return infoEmpresa
    }
}

class Contratacion{
    constructor(id, empresa, fondos, arrayContratados){
        this.id = id,
        this.fechaContrato = ""
        this.empresaContrato = empresa,
        this.fondos = fondos,
        this.empleadosAsignados = arrayContratados,
        this.presupuestoTotal = calcularPresupuesto(arrayContratados)
    }
    exponerContrato(){
        let infoContrato = (`Contrato N°: ${this.id.toString().padStart(6, '0')}  Fecha ${this.fechaContrato}`)
        return infoContrato
    }
}