let peliculasAccion = ['End Game', 'Iron Man', 'Capitán América'];
let peliculasComedia = ['Mi Pobre Angelito', '¿Qué Pasó Ayer?'];

let peliculas = [...peliculasAccion, ...peliculasComedia];

//console.log(peliculas);

let generoComedias = {
    nombreGenero : 'Comedia',
    popularidad : 3,
}

let miPobreAngelito = {
    nombre : 'Mi Pobre Angelito',
    duracion : 120,
    ...generoComedias,
}

let quePasoAyer = {
    nombre : '¿Qué Pasó Ayer?',
    duracion : 110,
    ...generoComedias
}

console.log(quePasoAyer);

function peliculasVistas(...nombresDePeliculas){
    for (let i = 0; i < nombresDePeliculas.length; i++) {
        console.log(`Persona vió ${nombresDePeliculas[i]}`);
        
    }
}

peliculasVistas('End Game', 'Iron Man');