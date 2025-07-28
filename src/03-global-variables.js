function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

let sumResult = add(5, 10);
console.log(sumResult);
let accumulator = add(sumResult, 10); // Accumulator
console.log(accumulator);
let subResult = subtract(6, 12);
console.log(subResult);