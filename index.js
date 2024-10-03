"use strict";
function computeSumOfSquares(arr) {
  const result = arr.map((num) => num * num).reduce((acc, num) => acc + num, 0);
  return result;
}
console.log(computeSumOfSquares([1, 2, 3]));

function printOddNumbersOnly(arr) {
  const result = arr.filter((num) => num % 2 !== 0);
  return result;
}
console.log(printOddNumbersOnly([1, 2, 3, 4, 5, 6]));

function printFibo(n, a, b) {
  let fiboSequence = [a, b];

  for (let i = 2; i < n; i++) {
    let next = fiboSequence[i - 1] + fiboSequence[i - 2];
    fiboSequence.push(next);
  }

  console.log(fiboSequence.slice(0, n).join(", "));
}

printFibo(10, 0, 1);

// Destructing Assignments

let user = { name: "John", years: 30 };

const { name, years, isAdmin = false } = user;

console.log(name);
console.log(years);
console.log(isAdmin);
