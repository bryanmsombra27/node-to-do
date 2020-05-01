const {
    argv
} = require('./config/yargs')
const {
    crear,
    obtenerListado,
    actualizar,
    borrar
} = require('./porHacer/porHacer');
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = obtenerListado();
        for (const tarea of listado) {
            console.log("=============================".green);
            console.log(`=========${tarea.descripcion}===========`);
            console.log(`Estado: ${tarea.completado}=============`.green);
        }
        console.log(listado);

        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        borrar(argv.descripcion);

        break;
    default:
        console.log('No se reconoce el comando');
}