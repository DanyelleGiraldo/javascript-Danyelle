const listaProductos = [];

const cargarProductoz = () => {
  for (let i = 0; i < 10; i++) {
    const nuevoproducto = {
      id: i,
      codigo: faker.commerce.product(),
      descripcion: faker.random.words(), 
      precio: faker.commerce.price()
    };
    listaProductos.push(nuevoproducto);
  }
}

const cargarFormularioProductos=()=>{
      const productosform = document.getElementById('productos-form');
      productosform.innerHTML = `
        <form>
            <label for="codigoProducto">Codigo del producto:</label>
            <input type="text" id="codigoProducto" required>
            <label for="desProducto">Descripcion del producto:</label>
            <input type="text" id="desProducto" required>
            <label for="precioProducto">Precio del producto:</label>
            <input type="number" id="precioProducto" required>
            <button type="button" onclick="crearProducto()">Crear Producto</button>
            <button type="button" onclick="mostrarListadoproductos()">Ver Listado de Productos</button>
        </form>
    `;
    const listadoProductos = document.getElementById('listado-productos');
    listadoProductos.style.display='none';
}

const crearProducto = () => {
    const codigoInput = document.getElementById('codigoProducto');
    const descripcionInput = document.getElementById('desProducto');
    const precioInput = document.getElementById('precioProducto');

    const codigo = codigoInput.value;
    const descripcion = descripcionInput.value;
    const precio = precioInput.value;

    const nuevoProducto = {
        id: listaProductos.length + 1,
        codigo: codigo,
        descripcion: descripcion,
        precio: precio
    }

    listaProductos.push(nuevoProducto);

    codigoInput.value = '';
    descripcionInput.value = '';
    precioInput.value = '';

    alert('Producto creado con éxito!');
    console.log(listaProductos);

    return nuevoProducto;
}


const mostrarListadoproductos=()=>{
    const productosform = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');
    
    productosform.style.display='none';
    listadoProductos.style.display='block';

    const ul=document.createElement('ul');

    for(const producto of listaProductos){
        const li=document.createElement('li');
        li.textContent= `ID: ${producto.id}, Codigo: ${producto.codigo}, descripcion: ${producto.descripcion}, precio: ${producto.precio}`;
        ul.appendChild(li);
    }

    listadoProductos.innerHTML='';
    listadoProductos.appendChild(ul);

    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',volverFormulario);
    listadoProductos.appendChild(volverButton);
    
}

const volverFormularioproductos=()=>{
    const productosform = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');

    listadoProductos.style.display='none';
    productosform.style.display='block';
    
}





