function dividir(a,b) {
    if (a === 0 || b === 0) {
        return "No se puede dividir por 0"
    }
    return a / b
}

let dividir3 = (a,b) =>{
    return (a === 0 || b === 0)? 'No se puede dividir por 0' : a / b; //if ternario
}

//console.log(dividir3(84,7));


let nombre = 'Sabrina';

nombre === 'Sabrina' ? console.log('Hola Sabrina!!') : null//equivale a un else, siempre va;
