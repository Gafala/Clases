const tareas = require('./tareas');
const process = require('process'); //nativo de node


let tarea = {
    id: 6,
    titulo: "Repasando destructuring",
    estado: "en proceso",
    aprobado: false,
}

switch(process.argv[2]){
    case 'listar':
        console.log(tareas.listarTareas());
        break;
    case 'guardar':
        let titulo = process.argv[3];
        tareas.agregarTarea(titulo);
    default:
        break;
}

tareas.agregarTarea(tarea)

/* ;

let tareasStringyficadas = JSON.stringify(tareasParseada,null,2)

 */

console.log(tareas.listarTareas());