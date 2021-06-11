/*

Filter con números
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.


*/
/*let aprobados = estudiantes.filter(function lista(alumno){
    if(alumno.aprobado==true){
        return console.log(`${alumno.nombre} aprobó con ${alumno.promedio}`);
    };
    //return aprobados.aprobado == true `está aprobado ${aprobados.nombre}`;

})

let desaprobados = estudiantes.filter(function lista(alumno){
    if(alumno.aprobado==false){
        return console.log(`${alumno.nombre} desaprobó con ${alumno.promedio}`);
    };
    //return aprobados.aprobado == true `está aprobado ${aprobados.nombre}`;

})*/

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]



let aprobados = estudiantes.filter(function lista(alumno){
    if(alumno.aprobado==true){
        return console.log(`${alumno.nombre} aprobó.`)
        }
            }
                );

let desaprobados = estudiantes.filter(function lista(alumno){
    if(alumno.aprobado==false){
        return console.log(`${alumno.nombre} desaprobó con ${alumno.promedio}`);
    }
});
    //return aprobados.aprobado == true `está aprobado ${aprobados.nombre}`;