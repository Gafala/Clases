/** 
 * asignacion por destructuración
 * no modifica ni altera el array de origen, solo lo copia
*/


let cursos = ['Programación', 'MKT', 'UX', 'Data Science', 'UX'];
let [programacion, mkt] = cursos;
console.log(cursos);
console.log(programacion);
console.log(mkt);
//Destructuración de arrays.

let persona = {
    nombre : 'Carli',
    edad : 28,
    domicilio : 'Calle Falsa 123',
}

// Destructuracion de objetos literales
let {nombre, edad} = persona;

let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca, kilometros} = auto;

console.log(marca);
console.log(kilometros);