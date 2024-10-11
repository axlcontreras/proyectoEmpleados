

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

//carga desde storage o main
// if (arrayEmpleados.length == 0){
//     instanciarStorageEmpleados(arrayEmpleados)
//     if(arrayEmpleados.length == 0){
//         console.log("En el Storage no hay ningun empleado se cargan desde MAIN")
//         arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5, empleado6)
//         localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
//     }
// }
// if (arrayEmpresas.length == 0){
//     instanciarStorageEmpresas(arrayEmpresas)
//     if(arrayEmpresas.length == 0){
//         console.log("En el Storage no hay ninguna empresa, se cargan desde MAIN")
//         arrayEmpresas.push()
//         localStorage.setItem("empresasCargadas", JSON.stringify(arrayEmpresas))
//     }
// }
//POR EL MOMENTO NO EJECUTAMOS EL MENU POR PROMPT NI TAMPOCO CARGAMOS ARRAY POR STORAGE 

// menuPrincipal()
arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5, empleado6)
console.log(`Los empleados cargados son:`)
console.log(arrayEmpleados)
console.log(`Las empresas cargadas son: `)
console.log(arrayEmpresas)
console.log(`Las contrataciones relizadas son:`)
console.log(arrayContrataciones)

let containerEmpleados = document.getElementById("containerEmpleados")

for(let empleado of arrayEmpleados){
    let empleadoNuevoDiv = document.createElement("div")
    empleadoNuevoDiv.className = "col-12, col-md-6 col-lg-4"
    empleadoNuevoDiv.innerHTML = `<div id="${empleado.id}" class="card" style="width: 18rem;">
    <img class="card-img-top img-fluid" style="height: 200px;"src="assets/img/${empleado.imagen}" alt="Foto perfil">
    <div class="card-body">
        <h4 class="card-title">${empleado.nombre} ${empleado.apellido}</h4>
        <p>Perfil: ${empleado.perfil}</p>
        <p class="">Valor de hora: $${empleado.valorHora}</p>
    <button id="" class="btn btn-outline-success">Contratar</button>
    </div>
    </div>`
    containerEmpleados.append(empleadoNuevoDiv)
}


