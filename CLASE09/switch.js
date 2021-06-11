let semaforo = 'rojo';
const color = process.argv[2];
switch(color){
    case 'rojo':
        console.log('Detenete.');
    break;
    case 'amarillo':
    break;    
        console.log('Precaución.');
    case 'verde':
        console.log('Avance.');
    break;
    default:
        console.log('Llama a la muni.');
    break;
}

console.log(color);

/*
if(semaforo === 'rojo'){
    console.log('Detengase.');
}else if( semaforo === 'amarillo'){
    console.log('Precaución.');
}else if( semaforo === 'verde'){
    console.log('Avance.');
}else{
    console.log('Llama a la muni.');
}
*/
