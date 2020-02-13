/*
    Programa para realizar CRUD por linea de comandos
    Uso:
        node app.js [opcion] [argumentos]
        opcion:
            --create
        argumentos:
            --firstname=VALOR
*/

const CRUD = require('./helpers/crud');
const db = require('./models');

const params = process.argv;

//Evaluacion de que existan mas de dos parametros para su ejecucion

if(params <= 2){
    console.log("Nada para ejecutar");
    process.exit(0);
}

//Se toma solo los argumentos a partir de la segunda posicion
const args = params.slice(2);

const command = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1];

switch(command){
    case CRUD.CREATE:
        console.log('Operacion de creacion');
        break;
    case CRUD.READ:
        break;
    case CRUD.UPDATE:
        break;
    case CRUD.DELETE:
        break;
    default:
        console.log('Operacion no reconocida');
}