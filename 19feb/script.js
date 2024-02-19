const empleados = [
    {
        id:1,
        nombre: "daniel"
    },
    {
        id:2,
        nombre:"dylan"
    }
]

const salarios = [
    {
        id:1,
        salario: 1500
    },
    {
        id:2,
        salario: 3500
    }
]

// const getEmpleados=(id,callback)=>{
//     const empleado= empleados.find(x=> x.id === id);
//     if (empleado){
//         callback(empleado)
//     }
// }

// const getSalarios=(id,callback)=>{
//     const salario= salarios.find(x=> x.id === id)
//     if (salario){
//         callback(salario)
//     }
// }

// getEmpleados (1, (emp)=>{
//     console.log("id"+ emp.id);
//     console.log("nombre"+ emp.nombre);

// });

// getSalarios (2, (sal)=>{
//     console.log("id: "+ sal.id);
//     console.log("salario:"+ sal.nombre);

// });

const getdatosempleados= (id,callback)=>{
    const empleado= empleados.find(x=> x.id === id);
    if (empleado){
        callback(empleado)
    };
    const salario= salarios.find(y=> y.id === id);
    if (salario){
        callback(salario)
    };
};

getdatosempleados(1, (emp)=>{
    console.log("id: "+ emp.id);
    console.log("nombre: "+ emp.nombre);
    console.log("salario:"+ emp.salario);
});