const boletos = [
  { type: "Luz", price: 60 },
  { type: "Internet", price: 120 },
  { type: "Aluguel", price: 800 },
  { type: "NuBank", price: 400 },
];

// const result = boletos.reduce((acc, item) => {
//   return acc + item.price;
// }, 0);
// console.log(result);

let sum = 0;
boletos.forEach((item) => {
  console.log(item, sum);
  sum = item.price;
  console.log(sum);
});

console.log(sum);

// let sum = boletos
// .map(num => num.price) //60, 120, 800, 400
// // .filter(num => num > 100) //120, 800, 400
// .reduce(acc, cur => acc + cur, 0)

// console.log(sum);

// let org = boletos
//   .map((obj) => obj.type) //"luz", "internet", "aluguel","nubank"
//   .sort();

// console.log(org);
