const mostrarResultado = () => {
    const listado = document.getElementById('resultado');
    const resultado = busqueda();
    listado.innerHTML = resultado;
    listado.style.display = 'block';
};

const busqueda = () => {
    const dnaInput = document.getElementById('dnaInput').value.toUpperCase();
    const subsequenceInput = document.getElementById('subsequenceInput').value.toUpperCase();
    let posicion = dnaInput.indexOf(subsequenceInput);
    let resultado;

    if (posicion !== -1) {
        resultado = `Encontrado: "${destacarSubsecuencia(dnaInput, subsequenceInput)}"`;
    } else {
        resultado = `La cadena '${subsequenceInput}' no fue encontrada`;
    }

    return resultado;
};

const destacarSubsecuencia = (dnaInput, subsequenceInput) => {
    const inicio = dnaInput.indexOf(subsequenceInput);
    const fin = inicio + subsequenceInput.length;
    const subrayado = dnaInput.substring(0, inicio) +
    `<span style="background-color: yellow;">${dnaInput.substring(inicio, fin)}</span>` +
    dnaInput.substring(fin);
    return subrayado;
};
