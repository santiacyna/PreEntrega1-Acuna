class Producto {
  constructor(id, nombre, precio, cantidad, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.categoria = categoria;
  }
}

const productos = [];

const producto1 = new Producto(1, 'camiseta', 5300, 10, 'ropa');
const producto2 = new Producto(2, 'zapatillas', 35000, 5, 'calzado');
const producto3 = new Producto(3, 'pantalon', 13000, 8, 'ropa');
const producto4 = new Producto(4, 'telefono', 90000, 3, 'electronica');
const producto5 = new Producto(5, 'mochila', 8000, 15, 'accesorios');

productos.push(producto1, producto2, producto3, producto4, producto5);


productos.sort((a, b) => a.nombre.localeCompare(b.nombre));


const productoSeleccionado = prompt(
  '¿Qué producto desea comprar? Ingrese el nombre del producto:'
);


const productoEncontrado = productos.find(
  (producto) => producto.nombre === productoSeleccionado
);

if (productoEncontrado) {

  const precioTotal = productoEncontrado.precio.toFixed(2);
  alert(
    `¡El producto "${productoEncontrado.nombre}" está preparado para ir a su domicilio!\n\n` +
    `Precio: $${precioTotal}\n` +
    `Cantidad disponible: ${productoEncontrado.cantidad}\n\n` +
    '¡Gracias por su compra!'
  );
} else {
  alert('Producto no encontrado. Por favor, verifique el nombre e intente nuevamente.');
}


  




