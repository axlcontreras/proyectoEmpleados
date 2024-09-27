// )) Realizar un sistema para sueldos de una empresa. Se le solicita que nombre y apellido de la persona, junto al valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa. Realice el algoritmo para calcular e informar el sueldo mensual del empleado/a, teniendo en cuenta que se le asigna un bono mensual de 5% del sueldo por año cada año de antigüedad (por 1 año de antigüedad plus de 5%, 2 años plus de 10%, 3 años plus de 15%... etc)
//HAY OBJETOS // HAY MENU
//El bono porcentual va a ser a partir de los 10 años de experiencia

//IDEAS PARA AGREGAR:
// ------------ Función editar empleado >Nombre > Apellido >Cant Horas (SUBMENU) REALIZADO!!
// ------------ Función contratar empleado con un monto inincial fijo (se puede editar)ir restando a medida que se contratan empleados. REALIZADO!!
// ------------ Mostrar empleados contratados. REALIZADO!!
// ------------ Pensar y crear una función que sirva para mostrar. REALIZADO!!
// ------------ Pensar forma (seguramente if) para cuando no haya empleados REALIZADO!! 
// ------------ Pensar verificacion para cuando en seleccion de empleados esté mal seleccionado REALIZADO!!
// ------------ Que pasa si el ideliminar ingresado no existe, hacer condicional que valide eso. REALIZADO!! 
// ------------ Pensar forma de crear id que no se repita REALIDAZO!!
// ------------ Utilizar funciones de buscar REALIZADO!!
// ------------ Aplicar el storage tanto para carrito como para empleados cargados. REALIZADO!!
// ------------ Crear un parametro que indique la experiencia jr ssr sr REALIZADO!!
// ------------ Mostrar empleado que tenga si es sr /jr/sr REALIZADO!!

//Se puede pensar el programa como si fuera para una consultora a la que le asigna un empleado o un grupo de empleados a una empresa. 
//la empresa: se debe iniciar indicando el nombre, "cuit", y el presupuesto para la contratación. 
//finalizar contrataciones debe devolver una array con los empleados, total, empresa a asignar. 

//carga de arrays. 
const arrayEmpleados = []
const empleadosContratados = []

//instanciar empleados. 
const empleado1 = new Empleado (1, "Andres", "Martinez", 0, "CABA")
const empleado2 = new Empleado (2, "Daniel", "Fernandez", 1,"Buenos Aires")
const empleado3 = new Empleado (3, "Gustavo", "Kupinski", 2, "CABA")
const empleado4 = new Empleado (4, "Daniel", "Buira", 5, "Buenos Aires")
const empleado5 = new Empleado (5, "Miguel", "Rodriguez", 8, "Cordoba")
const empleado6 = new Empleado (6, "Sebastian", "Cardero", 15, "Santa Fe")

//carga desde storage o main
if (arrayEmpleados.length == 0){
    instanciarStorage(arrayEmpleados)
    if(arrayEmpleados.length == 0){
        console.log("En el Storage no hay ningun empleado se cargan desde MAIN")
        arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4, empleado5, empleado6)
        localStorage.setItem("empleadosCargados", JSON.stringify(arrayEmpleados))
    }
}


iniciar()

console.log(`Los empleados cargados son:`)
console.log(arrayEmpleados)
console.log(`Los empleados contratados son:`)
console.log(empleadosContratados)
