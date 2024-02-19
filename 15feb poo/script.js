const carro= {
    modelo: 2023,
    color:"rojo",
    motor:{
        cilindraje: 2200,
        combustible: "diesel",
    }
};

const carroobjeto = JSON.stringify(carro)
console.log(carroobjeto);


const cadenaJSON= '{"modelo": "Tunland", "tipo": "camioneta", "año": 2020}';

const carros = JSON.parse(cadenaJSON);

console.log(carros);
console.log(cadenaJSON);