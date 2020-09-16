const fruits = ["banana", "apple", "orange"];
const num = [2, 10, 5, 7, 6, 1];

const orderedNum = num.slice().sort((a, b) => {
  return b - a;
});

console.log(orderedNum, num);
