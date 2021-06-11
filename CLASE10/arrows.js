let laMitad = numero => numero / 2;

console.log(laMitad(8));

let dividir = (numeroA,numeroB) => numeroA / numeroB;
console.log(dividir(20,4));

let tengoQueTrabajar = dia => {
    if(dia == 'Sábado' || dia == 'Domingo'){
        return 'No tenes que trabajar';
    }else{
        return 'Tengo que trabajar';
    }
}

console.log(tengoQueTrabajar('Sábado'));