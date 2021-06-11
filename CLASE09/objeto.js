let futbolista = {
    nombre : 'Lionel',
    apellido : 'Messi',
    edad : 33,
    activo : true,
    saludar : function(){
        return 'Hola soy ' + ' ' + this.nombre + this.apellido;
    }

}

console.log(futbolista.saludar());