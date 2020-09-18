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

// let ageAsc = colaboradores.sort((a, b) => {
//   return a.idade - b.idade;
// });

// console.log(ageAsc);

// let ageDesc = colaboradores.sort((a, b) => {
//   return b.idade - a.idade;
// });
// console.log(ageDesc);

// const orderCargo = colaboradores.sort((a, b) => {
//   if (a.cargo == "estagiario") {
//     return -1;
//   }
//   if (a.cargo == "front-end") {
//     return 1;
//   }
//   if (a.cargo == "back-end") {
//     return -1;
//   }
//   if (a.cargo == "designer") {
//     return 1;
//   }
//   return 0;
// });

// // console.log(orderCargo);

const orderAge = colaboradores.sort((a, b) => {
  if (a.idade - b.idade !== 0) return a.idade - b.idade;
  if (b.idade - a.idade !== 0) return b.idade - a.idade;
  if (b.cargo - a.cargo !== 0) return b.cargo - a.cargo;
});

console.log(orderAge);
