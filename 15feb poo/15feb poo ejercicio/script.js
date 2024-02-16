// const libro = {titulo: "El destino del hombre", autor: "Fiske", genero: "Filosofia", añoPublicacion: 1942, editorial: "TOR", id: 142};

// const mostrarDetallesLibro = ({titulo, autor, genero, añoPublicacion, editorial}) => {
//     console.log(`titulo: ${titulo}, autor: ${autor}, genero: ${genero}, Año de publicacion: ${añoPublicacion}, editorial: ${editorial}`);
// }

// mostrarDetallesLibro(libro);

const libro = [
    {titulo: "El destino del hombre", autor: "Fiske", genero: "Filosofia", añoPublicacion: 1942, editorial: "TOR", id: 142}, 
    {titulo: "El Extranjero", autor: "Albert Camus", genero: "Novela", añoPublicacion: 1942, editorial: "RANDOM HOUSE", id: 923}, 
    {titulo: "El destino del hombre", autor: "fiske", genero: "filosofia", añoPublicacion: 1942, editorial: "TOR", id: 291}];

    const filtrar= (id)=>{
        return libro.find(libro => libro.id === id);
    };
    
    const mostrarDetallesLibro = ({titulo, autor, genero, añoPublicacion, editorial}) => {
        detalles=(`titulo: ${titulo}, autor: ${autor}, genero: ${genero}, Año de publicacion: ${añoPublicacion}, editorial: ${editorial}`);
        prompt(detalles);
    }

    const agregarlibro = () => {
        const nuevoTitulo = prompt("Ingrese el título del nuevo libro:");
        const nuevoAutor = prompt("Ingrese el autor del nuevo libro:");
        const nuevoGenero = prompt("Ingrese el género del nuevo libro:");
        const nuevoAñoPublicacion = parseInt(prompt("Ingrese el año de publicación del nuevo libro:"));
        const nuevaEditorial = prompt("Ingrese la editorial del nuevo libro:");
        const nuevoid = parseInt(prompt("Ingrese el id del nuevo libro:"));
    
        const nuevolibro = {
            titulo: nuevoTitulo,
            autor: nuevoAutor,
            genero: nuevoGenero,
            añoPublicacion: nuevoAñoPublicacion,
            editorial: nuevaEditorial,
            id: nuevoid  
        };
    
        libro.push(nuevolibro);
        libro.forEach(libro => mostrarDetallesLibro(libro));
    }

let opcion = parseInt(prompt("seleccione una opcion \n 1: mostrar caracteristicas de un libro \n 2: agregar otro libro \n 3: Salir"));

while (true) {
    let opcion = prompt("Seleccione una opción: \n 1: Mostrar características de un libro \n 2: Agregar otro libro \n 3: Salir");

    if (opcion === "1") {
        let input = prompt(`Ingrese el ID del libro\nLista de IDs y nombres:\n${libro.map(libro => `ID: ${libro.id}, Título: ${libro.titulo}`).join('\n')}\n \n  `);
        const idingresado = parseInt(input);
        const libroSeleccionado = filtrar(idingresado);

        if (libroSeleccionado) {
            mostrarDetallesLibro(libroSeleccionado);
        } else {
            alert("Libro no encontrado");
        }
    } else if (opcion === "2") {
        agregarlibro();
    } else if (opcion === "3") {
        break;
    } else {
        alert("Opción no válida. Por favor, elija una opción válida.");
    }
}




