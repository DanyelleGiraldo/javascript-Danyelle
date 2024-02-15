function operacionasicrona(x,y, callback){
    const resultado= x + y;
    callback(resultado)
}

function imprimirResultado(rta){
    console.log(rta);
}

operacionasicrona(5,10, imprimirResultado);

const multiplicacion=(a,b)=> a*b;

