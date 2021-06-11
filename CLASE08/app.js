const fs = require('fs'); // file system

const json = fs.readFileSync('./autos.json','utf-8');

const autos = JSON.parse(fs.readFileSync('./autos.autos','utf-8'));

let autoNuevo =  {
    marca : 'Chevrolet',
    modelo : 'Classic',
    anio : '2020',
    patente : 'BRE123',
    tipo : 'Sedan',
    precio : 750000,
    cuotas : 84,
    vendido : true,
};

autos.push(autoNuevo);
const autosStringificados = JSON.stringify(autos,null,2);

//console.log(autos);