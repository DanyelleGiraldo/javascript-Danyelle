function determinarGanadorSet(juegosA, juegosB) {
  
    let ganador = "";

    // Verificar si el resultado es inválido
    if (juegosA < 0 || juegosB < 0 || Math.abs(juegosA - juegosB) > 2) {
        ganador= "Invalido";
    }

    // Verificar si A o B ya ganaron el set
    if (juegosA >= 6 && juegosA - juegosB >= 2) {
        ganador= "Gano A";
    } else if (juegosB >= 6 && juegosB - juegosA >= 2) {
        ganador= "Gano B";
    }

    // Verificar si el set aún no termina
    if (juegosA === juegosB) {
        ganador= "Aun no termina";
    } else if( juegosA < 6 && juegosB < 6){
        ganador= "Aun no termina"
    }

    document.getElementById("resultado").innerHTML = ganador;
}

