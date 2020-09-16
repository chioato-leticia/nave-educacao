const colaboradores = [
  {
    name: "Juca",
    idade: 25,
    cargo: "front-end",
  },
  {
    name: "Márcia",
    idade: 23,
    cargo: "back-end",
  },
  {
    name: "Vitória",
    idade: 28,
    cargo: "designer",
  },
  {
    name: "Fernando",
    idade: 19,
    cargo: "estagiario",
  },
  {
    name: "Fabiane",
    idade: 25,
    cargo: "back-end",
  },
  {
    name: "Jéssica",
    idade: 23,
    cargo: "front-end",
  },
];

const sumAge = colaboradores.reduce((acc, person) => {
  return acc + person.idade;
}, 0);

// console.log(sumAge);

const jobCounter = colaboradores.reduce(
  (acc, person) => {
    acc[person.cargo] += 1; // acc['back-end'] = 1

    return acc;
  },
  { "front-end": 0, "back-end": 0, designer: 0, estagiario: 0 }
);
console.log(jobCounter);
