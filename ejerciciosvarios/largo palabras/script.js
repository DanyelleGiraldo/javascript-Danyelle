const calcularPalabraMasLarga = function () {
    const palabra1 = document.getElementById("palabra1").value;
    const palabra2 = document.getElementById("palabra2").value;
    let palabraMasLarga = "";

    if (palabra1.length > palabra2.length) {
        palabraMasLarga = "la palabra mas larga es: " + palabra1;
    } else if (palabra2.length > palabra1.length) {
        palabraMasLarga = "la palabra mas larga es: " + palabra2;
    } else {
        palabraMasLarga = "Las dos palabras tienen la misma longitud.";
    }

    document.getElementById("resultado").innerHTML = palabraMasLarga;
}
