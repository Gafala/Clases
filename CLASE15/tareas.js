const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./tareas.json','utf-8'));

const moduloTareas = {
    listarTareas : () => tareas,
    agregarTarea : titulo =>{
        let tarea = {
            id : tareas.length + 1,
            titulo ,
            estado : 'pendiente',
            aprobado : false
        }
        tareas.push(tarea);
        moduloTareas.guardarJSON(tareas);
        return 'Tarea guardada.';
    },
    guardarJSON : tareas =>  fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,2),'utf-8'),
    filtrarTareas : estado => tareas.filter(tarea => tarea.estado === estado),
    cambiarEstado : (filtro,nuevoEstado) => {
        let Tarea = function(titulo,estado){
            this.titulo = titulo
            this.estado = estado
        }

        let tareasActualizadas = tareas.map(tarea => {
            if(tarea.titulo.includes(filtro)){
                tarea.estado = nuevoEstado;
            }
            return new Tarea(tarea.titulo,tarea.estado);
        })
    }
}

module.exports = moduloTareas;
