let persona = {
    nombre : 'Gastón',
    apellido : 'Lafuente',
    nombreCompleto : function(){
        return this.more + ' ' + this.apellido;
    }
}

console.log(persona.nombre);//para acceder a una propiedad del objeto