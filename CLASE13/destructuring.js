let colores = ['rojo','amarillo','verde'];

//let pare = colores[0];

let [pare, precaucion, siga] = colores;

//console.log(siga);

let auto = {
    marca : 'Renault',
    modelo : 'Kangoo',
    anio : 2014,
}

const {marca, modelo} = auto; //se usa la misma palabra que tiene en el objeto literal.

console.log(marca);