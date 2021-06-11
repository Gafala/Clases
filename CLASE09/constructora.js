const autos = [
    {
        marca : 'Ford',
        modelo : 'Focus',
        
    },
    {
        marca : 'Fiat',
        modelo : 'Punto',
    }
]

function Auto(marca,modelo){
    this.marca = marca;
    this.modelo = modelo;
}
let miAuto = new Auto('Renault','Kangoo');
let autoVecino = new Auto('VolksWagen','Fox');
autos.push(miAuto);
autos.push(autoVecino);
console.log(autos);