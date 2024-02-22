const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2; 
});


console.log(numeros);
console.log(numerosMultiplicados);


const numerosPares = numerosMultiplicados.map(function(numero){
    if (numero%2=== 0) {
        return numero*2
    }
});
 console.log( numerosPares)


 const sumadeelementos = numeros.reduce(function(numero1, numero2){
    return numero1 + numero2
 });

 console.log(sumadeelementos);