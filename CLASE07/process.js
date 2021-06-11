const process = require('process');

function sumar(a,b){
    return a + b;
}

console.log(sumar(+process.argv[2], +process.argv[3]));