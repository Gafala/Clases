const productos = require('./productos');
console.log(productos());
console.log('-**************************************');
const productosConIva = [];

productos.forEach(producto =>{
    let producoModificado = {
        nombre : producto.nombre,
        precio : producto.precio * 21 / 100 + producto.precio,
    }
    productosConIva.push(producoModificado);

    });

    console.log(productosConIva);