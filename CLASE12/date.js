let fechaActual = new Date(1995, 8, 18 );//fecha puntual

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();
/*console.log(fechaActual.toUTCString());
console.log(fechaActual.getDay());*/


console.log(`Dia ${dia} mes ${mes} del ${anio}`);