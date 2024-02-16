// const carro= {
//     modelo: 2023,
//     color:"rojo",
//     motor:{
//         cilindraje: 2200,
//         combustible: "diesel",
//     }
// };

// const carroobjeto = JSON.stringify(carro)
// console.log(carroobjeto);


// const cadenaJSON= '{"modelo": "Tunland", "tipo": "camioneta", "año": 2020}';

// const carros = JSON.parse(cadenaJSON);

// console.log(carros);
// console.log(cadenaJSON);

const empleados = [
    {
      "nombre": "Juan Pérez",
      "apellido": "López",
      "id": 1
    },
    {
      "nombre": "Ana",
      "apellido": "González",
      "id": 2
    },
    {
      "nombre": "Pedro",
      "apellido": "Sánchez",
      "id": 3
    }
  ];
  
  const filtrar = (id) => {
    return empleados.find(empleado => empleado.id === id);
  };
  
  const mostrarempleado = ({ nombre, apellido }) => {
    const empleado = `nombre: ${nombre}, apellido: ${apellido}`;
    console.log(empleado);
  };
  
  const empleadoseleccionado = filtrar(2);
  
  if (empleadoseleccionado) {
    mostrarempleado(empleadoseleccionado);
  } else {
    alert("No se encontró el empleado");
  }
  

