// Datos simulados
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

// Función para obtener un cliente por su ID con async/await
const getCliente = async (id) => {
    const cliente = clientes.find(c => c.id === id);
    if (cliente) {
        return cliente;
    } else {
        throw new Error("Cliente con el ID " + id + " no existe");
    }
};

// Función para obtener un producto por su ID con async/await
const getProducto = async (id) => {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        return producto;
    } else {
        throw new Error("Producto con el ID " + id + " no existe");
    }
};

// Función para calcular el total de una factura con async/await
const calcularTotalFactura = async (productos) => {
    try {
        const productosArray = await Promise.all(productos.map(productoId => getProducto(productoId)));
        const total = productosArray.reduce((acc, producto) => acc + producto.precio, 0);
        return total;
    } catch (error) {
        throw error;
    }
};

// Función principal para obtener información de la factura con async/await
const obtenerInformacionFactura = async (facturaId) => {
    const factura = facturas.find(f => f.id === facturaId);
    if (factura) {
        try {
            const cliente = await getCliente(factura.clienteId);
            const total = await calcularTotalFactura(factura.productos);
            factura.total = total;
            return {
                factura,
                cliente,
                productos: factura.productos
            };
        } catch (error) {
            throw error;
        }
    } else {
        throw new Error("Factura con el ID " + facturaId + " no existe");
    }
};

// Ejercicio: Obtener información de la factura con ID 1001
const facturaId = 1001;

try {
    const infoFactura = await obtenerInformacionFactura(facturaId);
    console.log("Información de la factura:");
    console.log("Cliente:", infoFactura.cliente);
    console.log("Productos:", infoFactura.productos);
    console.log("Total de la factura:", infoFactura.factura.total);
} catch (error) {
    console.error("Error al obtener información de la factura:", error.message);
}
