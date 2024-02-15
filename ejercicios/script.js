function determinarGanadorSet(juegosA, juegosB) {
    if (juegosA < 0 || juegosB < 0 || Math.abs(juegosA - juegosB) > 2) {
        return "Invalido";
    }

    if (juegosA >= 6 && juegosA - juegosB >= 2) {
        return "Gano A";
    } else if (juegosB >= 6 && juegosB - juegosA >= 2) {
        return "Gano B";
    }

    if ((juegosA === 5 && juegosB === 5) || (juegosA === 6 && juegosB === 6)) {
        return "Aun no termina";
    }

    return "Invalido";
}