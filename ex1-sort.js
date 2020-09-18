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

let ageAsc = colaboradores.sort((a, b) => {
  if (a.idade > b.idade) {
    return 1;
  }
  if (a.idade < b.idade) {
    return -1;
  }
  return 0;
});

// const ascAgeOrderedArr = colaboradores.sort((a, b) =>
//   a.idade > b.idade ? 1 : -1
// );

// console.log(ageAsc);

let ageDesc = colaboradores.sort((a, b) => {
  if (a.idade < b.idade) {
    return 1;
  }
  if (a.idade > b.idade) {
    return -1;
  }
  return 0;
});

// console.log(ageDesc);

const orderCargo = colaboradores.sort((a, b) => {
  if (a.cargo == "estagiario") {
    return -1;
  }
  if (a.cargo == "front-end") {
    return 1;
  }
  if (a.cargo == "back-end") {
    return -1;
  }
  if (a.cargo == "designer") {
    return 1;
  }
  return 0;
});

// console.log(orderCargo);

const orderAge = colaboradores.sort((a, b) => {
  if (a.idade > b.idade) {
    return 1;
  }
  if (a.idade < b.idade) {
    return -1;
  }
  if (a.cargo > b.cargo) {
    return 1;
  }
  if (a.cargo > b.cargo) {
    return -1;
  }
  return 0;
});

console.log(orderAge);
