var boletos = [
  { type: "Luz", price: 60 },
  { type: "Internet", price: 120 },
  { type: "Aluguel", price: 800 },
  { type: "NuBank", price: 400 },
];

console.log(
  boletos.reduce((firstValue, value) => {
    return firstValue + value.price;
  }, 0)
);
