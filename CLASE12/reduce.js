const productos = require('./productos');


productos.forEach( producto => {
    total = producto.precio + total;
})

console.log(total);