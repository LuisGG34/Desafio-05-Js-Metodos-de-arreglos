const tareas = [{
                id: 1,
                text: "Hacer la cama",
                estado:false
                },
                {
                id: 2,
                text: "Hacer deporte",
                estado:false
                },
                {
                id: 3,
                text: "Cocinar",
                estado:false
                },];
let idCounter = 4;

function agregarTareas() {
    const inputTarea = document.getElementById('InputTarea').value;

    const tarea = {
    id: idCounter++,
    text: inputTarea,
    estado: false,
    }

    tareas.push(tarea);
    inputTarea.value = '';
    actualizarListaTareas();
    
}

function actualizarListaTareas() {
    const listaTareas = document.getElementById('ListaTareas');
    let template = '';
    
    for (const tarea of tareas){
        template += `
            <tr class="${tarea.estado ? 'completed' : ''}">
                <td>${tarea.id}</strong></td>
                <td>${tarea.text}</td>
                <td><input onclick="cambiarEstado(${tarea.id})" type="checkbox" ${tarea.estado ? 'checked' : ''}></td>
                <td><button onclick="eliminarTarea(${tarea.id})" class='boton'>X</button></td>
            </tr>`    
                ;  
        }
    listaTareas.innerHTML = template;
    document.querySelector("#total").innerHTML = contarTareas();
    document.querySelector("#Realizadas").innerHTML = contarTareasRealizadas();
}

document.getElementById('BotonAgregar').addEventListener('click', agregarTareas);

function eliminarTarea(numeroId) {
    const idTareaEliminar= tareas.findIndex( (tarea) => tarea.id === numeroId);
    tareas.splice(idTareaEliminar, 1);
    actualizarListaTareas();
}

function contarTareas() {
    const cantidadTareas = tareas.length;
    return cantidadTareas;
}


function cambiarEstado(idElementoSeleccionado) {
    const posicion = tareas.findIndex((tarea) => {
        if (idElementoSeleccionado === tarea.id) {
            return true;
        }
        return false;
    });

    tareas[posicion].estado = !tareas[posicion].estado;
    actualizarListaTareas();
}

function contarTareasRealizadas(){
    const cantidadTareasEstado = tareas.filter((tarea) => tarea.estado);
    const valorCantidadTareasEstado = cantidadTareasEstado.length;
    return valorCantidadTareasEstado;
}

actualizarListaTareas();
