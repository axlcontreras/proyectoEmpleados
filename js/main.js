//carga de arrays. 
const arrayEmpleados = []
const arrayEmpresas = []
const arrayContrataciones = []

//instanciar empleados. 
const empleado1 = new Empleado (1, "Andres", "Martinez", 0, "CABA","Andres Martinez.png")
const empleado2 = new Empleado (2, "Daniel", "Fernandez", 1,"Buenos Aires", "Daniel Fernandez.png")
const empleado3 = new Empleado (3, "Gustavo", "Kupinski", 2, "CABA", "Gustavo Kupinski.png")
const empleado4 = new Empleado (4, "Daniel", "Buira", 5, "Buenos Aires", "Daniel Buira.png")
const empleado5 = new Empleado (5, "Miguel", "Rodriguez", 8, "Cordoba", "Miguel Rodriguez.png")
const empleado6 = new Empleado (6, "Sebastian", "Cardero", 15, "Santa Fe", "Sebastian Cardero.png")
empleado6.contratado = true

//carga desde storage o main
if (arrayEmpleados.length == 0){
    instanciarStorageEmpleados(arrayEmpleados)
    if(arrayEmpleados.length == 0){
        console.log("por ese motivo se cargan desde el main")
        arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5, empleado6)
        localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
    }
}
// if (arrayEmpresas.length == 0){
//     instanciarStorageEmpresas(arrayEmpresas)
//     if(arrayEmpresas.length == 0){
//         console.log("En el Storage no hay ninguna empresa, se cargan desde MAIN")
//         arrayEmpresas.push()
//         localStorage.setItem("empresasCargadas", JSON.stringify(arrayEmpresas))
//     }
// }



