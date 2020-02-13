/*
    Programa para realizar CRUD por linea de comandos
    Uso:
        node app.js [opcion] [argumentos]
        opcion:
            --create
        argumentos:
            --CLAVE=VALOR
*/

const CRUD = require("./helpers/crud");
const db = require("./models");

const params = process.argv;

//Evaluacion de que existan mas de dos parametros para su ejecucion

if (params <= 2) {
  console.log("Nada para ejecutar");
  process.exit(0);
}

//Se toma solo los argumentos a partir de la segunda posicion
const args = params.slice(2);

const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];

switch (command) {
  case CRUD.CREATE:
    const data = {};
    //Toma de argumentos para la operacion
    const argumentos = args.slice(1);
    argumentos.forEach(arg => {
      const argumento = arg.split("=");
      data[argumento[0].substring(2)] = argumento[1];
    });

    db[entity]
      .create(data)
      .then(() => {
        console.log("Elemento creado");
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });

    break;
  case CRUD.READ:
    db[entity]
      .findAll()
      .then(entidades => {
        console.log(entidades);
      })
      .catch(err => {
        console.log(err);
      });
    break;
  case CRUD.UPDATE:
    updateData = {};
    //Toma de argumentos para la operacion
    upArgumentos = args.slice(1);
    let id = "";
    upArgumentos.forEach(arg => {
      const argumento = arg.split("=");
      clave = argumento[0].substring(2);
      if (clave == "id") {
        id = argumento[1];
      } else {
        updateData[clave] = argumento[1];
      }
    });

    db[entity]
      .update(updateData, { where: { id: id } })
      .then(() => {
        console.log("Elemento actualizado ID " + id);
        console.log(updateData);
      })
      .catch(err => {
        console.log(err);
      });
    break;
  case CRUD.DELETE:
    const deleteArgs = args.slice(1)[0].split("=");
    if (deleteArgs[0].substring(2) == "id") {
      let id = deleteArgs[1];
      db[entity]
        .destroy({ where: { id: id } })
        .then(() => {
          console.log("Elemento eliminado");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("Por favor especificar un id");
    }
    break;
  default:
    console.log("Operacion no reconocida");
}
