// const opt = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer'

//     },
//     completado: {
//         alias: '-c',
//         default: true,
//         desc: 'Marca como pendiente la tarea'
//     }
// }
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: '-c',
    default: true,
    desc: 'Marca como pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'Genera una nueva tarea a realizar', {
        descripcion
    })
    .command('listar', 'Genera una lista con todas las tareas almacenadas')
    .command('actualizar', 'Actualiza una tarea registrada', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea registrada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}