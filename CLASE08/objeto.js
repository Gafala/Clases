let autos = [
    {
        marca : 'Ford',
        modelo : 'Focus',
        anio : '2012',
        patente : 'ABC123',
        tipo : 'Sedan',
        precio : 300.000,
        cuotas : 36,
        vendido : false,
        valorCuota : function(){
            return this.precio / this.cuotas;
        },
    },
    {
        marca : 'Fiat',
        modelo : 'Siena',
        anio : '2002',
        patente : 'AAE123',
        tipo : 'Sedan',
        precio : 250000,
        cuotas : 24,
        vendido : false,
        valorCuota : function(){
            return this.precio / this.cuotas;
        },
    }
] 

let autoNuevo =  {
    marca : 'Chevrolet',
    modelo : 'Classic',
    anio : '2020',
    patente : 'BRE123',
    tipo : 'Sedan',
    precio : 750000,
    cuotas : 84,
    vendido : true,
    valorCuota : function(){
        return this.precio / this.cuotas;
    },
};

autos.push(autoNuevo);


console.log('valor de cuota:', +autos[2].valorCuota().toFixed(2)); //.toFixed para acortar la cantidad de decimales a dos

