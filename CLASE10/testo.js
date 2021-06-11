/*let texto = 'Oye';

let loro = textoRepetir => {
    for(let i = 0; i < 5; i++){
    return console.log(textoRepetir[i]);
    }
};
*/
/*let texto = 'x';
for(let i = 0; i < 5; i++){
    return console.log(texto);
}*/
//loro(texto);
/*
let bicicletaA = {
    rodado: 33,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 22,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = { marca : bicicletaA.rodado > bicicletaB.rodado ? bicicletaA.marca : bicicletaB.marca}

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );*/



let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = { marca : bicicletaA.rodado > bicicletaB.rodado ? bicicletaB.marca : bicicletaA.marca}


console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );


//let texto = 'Oye';
function loro  (texto){
    for(let i = 0; i < 5; i++){
         console.log(texto);
    }
}

loro('oye');