

//carga de arrays. 
const arrayEmpleados = []
const arrayEmpresas = []
const arrayContrataciones = []

//instanciar empleados. 
const empleado1 = new Empleado (1, "Andres", "Martinez", 0, "CABA")
const empleado2 = new Empleado (2, "Daniel", "Fernandez", 1,"Buenos Aires")
const empleado3 = new Empleado (3, "Gustavo", "Kupinski", 2, "CABA")
const empleado4 = new Empleado (4, "Daniel", "Buira", 5, "Buenos Aires")
const empleado5 = new Empleado (5, "Miguel", "Rodriguez", 8, "Cordoba")
const empleado6 = new Empleado (6, "Sebastian", "Cardero", 15, "Santa Fe")

//carga desde storage o main
if (arrayEmpleados.length == 0){
    instanciarStorageEmpleados(arrayEmpleados)
    if(arrayEmpleados.length == 0){
        console.log("En el Storage no hay ningun empleado se cargan desde MAIN")
        arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5, empleado6)
        localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
    }
}
if (arrayEmpresas.length == 0){
    instanciarStorageEmpresas(arrayEmpresas)
    if(arrayEmpresas.length == 0){
        console.log("En el Storage no hay ninguna empresa, se cargan desde MAIN")
        arrayEmpresas.push()
        localStorage.setItem("empresasCargadas", JSON.stringify(arrayEmpresas))
    }
}


menuPrincipal()

console.log(`Los empleados cargados son:`)
console.log(arrayEmpleados)
console.log(`Las empresas cargadas son: `)
console.log(arrayEmpresas)
console.log(`Las contrataciones relizadas son:`)
console.log(arrayContrataciones)


