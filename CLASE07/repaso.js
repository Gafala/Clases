let usuarios = ['Marisol', 'Sabrina', 'Leandro'];


let usuarioALogearse = 'Sabrina';

let usuarioLogeado = usuarios.includes(usuarioALogearse);

if(usuarioLogeado){
    console.log("Bienvenido" + ' ' + usuarioALogearse);
}
else{
    console.log('No está logeado');
}
console.log(usuarioLogeado);