const process = require('process'); //un modulo nativo 
const comando = process.argv[2]; //para modificar en consola
const articulos = require('./articulos');
const nombre = process.argv[3];
const precio = +process.argv[4]; // para convertirlo en number le pongo un + por delante
const stock = +process.argv[5];
switch (comando) {
    case 'agregar':
        articulos.agregar('lapiz',50,5);
        break;
    case 'listar':
        articulos.listar();
    default:
        break;
}