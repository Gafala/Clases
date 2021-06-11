const calculadora = {
    sumar : function(a,b){
        return a + b;
    },//metodo del objeto porque tiene una funcion dentro de una propiedad
    restar : function(a,b){
        return a - b; 
    },
    multiplicar : function(a,b){
        return a * b; 
    },
    dividir : function(a,b){
        if(a==0 || b == 0){
            return 'ERROR: No se puede dividir por CERO';
        }
        return a / b;

    }
}

module.exports = calculadora; // exporto todo el objeto 'calculadora'