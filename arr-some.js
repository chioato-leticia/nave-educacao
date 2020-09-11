const frontEnd = [
  { id: 1, name: "Érico Grehs", frontEnd: true },
  { id: 2, name: "Lucas Barbosa", frontEnd: true },
  { id: 3, name: "Letícia Heller", frontEnd: false },
];

console.log(frontEnd.some((person) => person.frontEnd));
