const Goku = {
  nome: "Kakaroto",
  força: 99999,
  fala: () => {
    return "Oi eu sou o Goku";
  }
};

const Vegeta = {
  nome: "Vegeta",
  força: 99998,
  fala: () => {
    return "Meu coração é puro... Puro ÓDIO!";
  }
};

const maisForteDoUniverso = (sayajin, outroSayajin) => {
  return sayajin.força > outroSayajin.força ? sayajin.nome : outroSayajin.nome;
};

module.exports.Goku = Goku;
module.exports.Vegeta = Vegeta;
module.exports.maisForteDoUniverso = maisForteDoUniverso;
