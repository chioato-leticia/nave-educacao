const iceCreams = [
  { flavor: "chocolate", quantity: 1 },
  { flavor: "pistachio", quantity: 5 },
  { flavor: "african Cream", quantity: 2 },
  { flavor: "vanilla", quantity: 0 },
];

const foundIceCream = iceCreams.find((iceCream) => !iceCream.quantity);

console.log(foundIceCream);
