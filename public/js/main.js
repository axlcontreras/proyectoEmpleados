//**********************************VARIABLES*******************************/

//Inicializamos arrays
const arrayEmpleados = []
const arrayEmpresas = []
const arrayContrataciones = []
const empleadosDB = []
const empleadosNoEfectivos = []


//**********************************CLASSES*********************************/
class Empleado{
    constructor(id, nombre, apellido, antiguedad, ciudad, img, efec, horas){
        this.id= id,//el id será dado por la base de datos.
        this.nombre = nombre,
        this.apellido = apellido,
        this.cantHoras = horas, //se asignará cuando se confirme en contrato
        this.antiguedad = antiguedad,
        this.efectivo = efec,
        this.ciudad = ciudad,
        this.contrato,  //se le asignará un contrato que tambien tendria que tener un table en la db que nos de la info de la empresa. 
        this.imagen = img,
        this.perfil = this.indicarPerfil(),
        this.bonoPorcentual = this.calcularBonoPorcentual(), // a partir de los 10 años de experiencia
        this.valorHora = this.tasarHora(),
        this.sueldoMensual = this.calcularSueldoMensual()
    }
    //indicar perfil y tasar hora podrian estar en una sola funcion
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
    infoContratado(){
        let contratado = ""
        if (this.efectivo == 1){
            contratado = "Contratado"
        }else if(this.efectivo == 0){
            contratado = "No contratado"
        }
        return contratado
    }



}

class EmpresaCliente{ //Sin desarrollar el ejs 
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
        this.presupuestoTotal = 0
    }
    exponerContrato(){
        let infoContrato = (`Contrato N°: ${this.id.toString().padStart(6, '0')}  Fecha ${this.fechaContrato}`)
        return infoContrato
    }
}






//**********************************FUNCTIONS******************************/

//funcion utilizada en diversas Vistas
function buscarIndex(array, id){
    let index = array.findIndex(empleado=>empleado.id == id)
    return index
}
function asignarContrato(array, idContrato){
    for (let empleado of array){
        empleado.contrato = idContrato
    }
}

//Funciones obtener Empleados desde la BD
const cargarEmpleadosAsync = async (array) => {
    array.length = 0;
    const resp = await fetch ("http://localhost:3000/empleadosDB") //recordar que los fetch devuelven promesas, se los puede capturar con el .then().catch().finally()
    const dataEmpleados = await resp.json() //es un metodo para poder capturar los json
    for (let empleado of dataEmpleados){
        const empConClass = new Empleado (empleado.id, empleado.nombre, empleado.apellido, empleado.antiguedad, empleado.ciudad, "NuevoEmpleado.png", empleado.efectivo, empleado.horas) //cuando le damos la clase, el .atributo que ponemos tiene que ser el nombre de la columna de la db
        array.push(empConClass)
    }
    return array
}

const cargarEmpleadosNoEfectivos = async (array) => {
    array.length = 0;
    const resp = await fetch ("http://localhost:3000/empleadosNoEfectivos")
    const dataEmpleados = await resp.json()
    for (let empleado of dataEmpleados){
        const empConClass = new Empleado (empleado.id, empleado.nombre, empleado.apellido, empleado.antiguedad, empleado.ciudad, "NuevoEmpleado.png", empleado.efectivo, empleado.horas)
        array.push(empConClass)
    }
    return array
}







//*********************************UTILITIES BOOTSTRAP**********************/}

//tooltips (Sin funcionar actualmente)
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


