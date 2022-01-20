console.log("  ---  probar que funciona");

const tirarDado = (numeroCaras = 6) => {
  return Math.floor(Math.random() * numeroCaras) + 1;
};

console.log(tirarDado());
console.log(tirarDado(20));

const contarPalabras = (frase) => {
  return frase.split(" ").length;
};

const quijote =
  "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";

console.log(contarPalabras(quijote));

console.log(quijote[0]);

const contarCaracteres = (frase, caracter) => {
  let total = 0;
  for (let x = 0; x < frase.length; x++) {
    if (frase[x] === caracter) {
      total++;
    }
  }
  return total;
};

console.log(contarCaracteres(quijote, "a"));

export const MIVARIABLE = "OLA K ASE";
