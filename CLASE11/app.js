const process = require('process'); //un modulo nativo 
const comando = process.argv[2]; //para modificar en consola
const articulos = require('./articulos');
const nombre = process.argv[3];
const precio = +process.argv[4]; // para convertirlo en number le pongo un + por delante
const stock = +process.argv[5];
switch (comando) {
    case 'agregar':
        articulos.agregar(nombre,precio,stock);
        break;
    case 'listar':
        articulos.listar();
    case 'deshacer':
        articulos.deshacer();
    case 'filtrar' : 
        articulos.filtrarPorPrecio(process.argv[3],process.argv[4]); //para poder usar las posiciones
    case 'buscar'  : articulos.buscar(process.argv[3])
        default:
        break;
}