const clientes = [
    {
        id: 1,
        nombre: "Juan",
        direccion: "Calle A, Ciudad"
    },
    {
        id: 2,
        nombre: "Maria",
        direccion: "Calle B, Ciudad"
    }
];

const productos = [
    {
        id: 101,
        nombre: "Producto 1",
        precio: 50
    },
    {
        id: 102,
        nombre: "Producto 2",
        precio: 75
    },
    {
        id: 103,
        nombre: "Producto 3",
        precio: 100
    }
];

const facturas = [
    {
        id: 1001,
        clienteId: 1,
        productos: [101, 102],
        total: 0
    },
    {
        id: 1002,
        clienteId: 2,
        productos: [103],
        total: 0
    }
];

const getCliente= (id, callback)=>{
    const cliente= clientes.find(x=> x.id === id);
    if (cliente){
        callback(cliente)
    };
};

const getProducto=(id, callback)=>{
    const producto = productos.find(y=> y.id === id);
    if (producto){
        callback(producto)
    };
    
};

const calcularTotalFactura = (productosIds, callback) => {
    let total = 0;

    productosIds.forEach((productoId) => {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            total += producto.precio;
        }
    });
    callback(total);
}

// Recibe un ID de factura y un callback. Utiliza las funciones anteriores para obtener 
// información detallada sobre la factura, incluyendo el cliente, los productos y el total. 
// Llama al callback con la información obtenida o un mensaje de error si la factura no existe.

const obtenerInformacionFactura= (facturaId, callback)=>{

}


const productozs =[101,103]

const productozzz = 101

getCliente(2, (x)=>{
    console.log(`datos del cliente: ${x}`)
})

getProducto(101, (x)=>{
    console.log(`Datos del producto: ${x}`)
})

calcularTotalFactura(productozs, (x)=>{
    console.log(`el total de los productos es: ${x}` )
})