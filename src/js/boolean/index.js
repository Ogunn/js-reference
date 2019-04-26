/**
 * Não tem nada de interessante nas referências do objeto Boolean.
 * Então por que não brincar de Dragon Ball?
 */

// const Sayajins = require("./js/boolean/booleanObject"); DESCOMENTE ESSA LINHA
const Sayajins = require("./booleanObject"); // COMENTE/EXCLUA ESSA LINHA

const Goku = Sayajins.Goku;
const Vegeta = Sayajins.Vegeta;

const maisForteDoUniverso = Sayajins.maisForteDoUniverso;

console.log(Goku.fala());
console.log(Vegeta.fala());

maisForte = maisForteDoUniverso(Goku, Vegeta);

console.log("Mais forte do Universo: ", maisForte);
