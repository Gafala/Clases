let citricos = ['naranja','limon','pomelo','mandarina'];

let rojos = ['frutillas','arándanos','ciruela','mora','frambuesa'];

let ensalada = [...citricos,...rojos];//spread operator

let ensaladaEach = [];

citricos.forEach(fruta =>{
    ensaladaEach.push(fruta);
})
rojos.forEach(fruta =>{
    ensaladaEach.push(fruta);
})
console.log(ensaladaEach);