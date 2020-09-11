const numbers = [1, 2, 4, 8, 1, 4, 9, 10];

console.log(numbers.filter((elem, index, arr) => arr.indexOf(elem) === index));
