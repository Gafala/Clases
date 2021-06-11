let fechaActual = new Date();//crear una nueva instancia.

console.log(fechaActual.toLocaleDateString());

console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getDay());


setInterval(() => {
    let hora = new Date()
    console.log(hora.toLocaleTimeString);
}
)