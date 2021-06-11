/*let sumar = (numeroUno,numeroDos) => numeroUno + numeroDos;
let restar = (numeroUno,numeroDos) => numeroUno + numeroDos;
let multiplicar = (numeroUno,numeroDos) => numeroUno + numeroDos;
let dividir = (numeroUno,numeroDos) => numeroUno + numeroDos;

let operacion = (numeroUno,numeroDos,operar) => operar(numeroUno,numeroDos); */// en el lugar de operacion ejecuto alguna del as operaciones matematicas
let buscadores = ['yahoo.com.ar','google.com.ar'];
function agregarHttp(url) {
    return 'http://' + url; 
}

function procesar(array,callback){
    let nuevoArray = [];
    for(let i = 0;i < array.length; i++){
       let elemento = callback(array[i],callback);
       nuevoArray.push(elemento);
    } return nuevoArray;
}

console.log(procesar(buscadores,agregarHttp));