const fs = require("fs");
const rutaArchivo = "./data/quijote.txt";
const rutaArchivoNueva = "./data/quijote-modificado.txt";

// Crear un script que dado una fraseen un archivo txt
// nos devuelva el número de palabras que tiene dicha frase.

fs.readFile(rutaArchivo, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
  reemplazarEspacios(data.toString());
});

// Crear un script que dado un fichero genere
// otro con cada palabra en una nueva línea
const saltoDeLinea = `
`;

const reemplazarEspacios = (texto) => {
  const separado = texto.split(" ");
  console.log(separado);
  const unido = separado.join(saltoDeLinea);
  console.log(unido);

  fs.writeFile(rutaArchivoNueva, unido, (err) => {
    if (err) {
      console.error("hubo un error al guardar el archivo");
      return;
    }
    console.log("archivo guarado con exito");
  });
};
// .split(delimitador) -> array[]
// .join(delimitador) -> string
