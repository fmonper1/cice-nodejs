const fs = require("fs");
const inquirer = require("inquirer");
import { MIVARIABLE } from "./server";
// const parametros = process.argv.slice(2);

// console.log(parametros);

// fs.readFile(parametros[0], (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data.toString());
// });

// console.log(`Buenas noches ${parametros[0]}!`);

/**
 * Leer input del usuario en la terminal con readline
 */
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("como es tu nombre?", (nombre) => {
  console.log(`Buenas noches ${nombre}!`);

  readline.close();
});

/**
 * Leer input del usuario en la terminal con inquire
 */
// const preguntas = [
//   { type: "input", name: "nombre", message: "¿Cual es tu nombre?" },
//   { type: "input", name: "edad", message: "¿Cual es tu edad?" },
//   { type: "input", name: "correo", message: "¿Cual es tu correo?" },
// ];

// inquirer.prompt(preguntas).then((respuestas) => {
//   console.log(respuestas);
//   console.log(`Hola ${respuestas["nombre"]}`);
// });
console.log(MIVARIABLE);
