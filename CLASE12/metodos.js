let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaEl100 = notas.map(function(numero){
    return numero * 10;
})

//console.log(notasHastaEl100); solamente muestro


let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
});

//console.log(notasAprobadas); Muestra [10, 8, 9, 7];

let sumaNotas = notas.reduce(function(estado, numero){//estado inicia en 0, donde se guarda
    return estado + numero;
});

//console.log(sumaNotas);

notas.forEach(function(valor, indice){//primer término se guarda el valor, y en el segundo termino el indice del FOR
    console.log(`En la posición ${indice} tengo el valor ${valor}`);
})