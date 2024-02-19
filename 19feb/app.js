function realizaroperacion(num1,num2,operacion){
    console.log(`operacion: ${num1} y ${num2}`)
    operacion(num1,num2)
}

function sumar(a,b){
    console.log(`suma: ${a+b}`);
}

function restar(a,b){
    console.log(`resta: ${a-b}`);
}

function multiplicar(a,b){
    console.log(`multiplicion: ${a*b}`);
}

function dividir(a,b){
    console.log(`dividicion: ${a/b}`);
}

realizaroperacion(5, 3, sumar);

realizaroperacion(5, 3, restar);

realizaroperacion(5, 3, multiplicar);

realizaroperacion(5, 3, dividir);