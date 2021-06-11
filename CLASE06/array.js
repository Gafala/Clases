let colores = ['azul', 'rojo', 'verde'];

let azul = colores[0];


let cantidadDeElementos = colores.length; //largo del array
console.log(cantidadDeElementos);
colores.push('naranja');

console.log(colores);  

let nombres = ['Juan', 'Martin', 'Cristian', 'Gaspar'];
let nominada = nombres.pop(); // no recibe parametros, borra el último elemento del array.

console.log(nominada);  

let listado = colores.join(',');
console.log(listado);

let array = listado.split(',');
console.log(array);

let equiposDeFutbol = ['Barcelona', 'Real Madrid', 'Manchester', 'Chacarita'];
console.log(equiposDeFutbol.indexOf('Boca'));