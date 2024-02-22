document.getElementById('verifyBtn').addEventListener('click', function() {
    const secuencia = document.getElementById('sequence').value;
    const personas = ['Pedro', 'Juan', 'Diego'];
    const cromosomas = [
      '00000101010101010101',
      '00101010101101110111',
      '00100010010000001001'
    ];
  
    let maxCoincidencias = 0;
    let culpableIndex = -1;
  
    for (let i = 0; i < cromosomas.length; i++) {
      let coincidencias = 0;
      for (let j = 0; j < secuencia.length; j++) {
        if (cromosomas[i][j] === secuencia[j]) {
          coincidencias++;
        }
      }
      if (coincidencias > maxCoincidencias) {
        maxCoincidencias = coincidencias;
        culpableIndex = i;
      }
    }
  
    const porcentajeParentesco = (maxCoincidencias / secuencia.length) * 100;
    const culpable = personas[culpableIndex];
    document.getElementById('result').textContent = `El culpable es ${culpable} con un parentezco de ${porcentajeParentesco.toFixed(2)}%`;
  });
  