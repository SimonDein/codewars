// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.


function multiplicateDigits(num) {
  return String(num).split('').reduce((result, num) => result * num);
}

function persistence(num) {
  let count = 0;
  for(;num >= 9; count += 1) {
    num = multiplicateDigits(num);
  }
  return count;
}

console.log(persistence(39) === 3);
console.log(persistence(4) === 0);
console.log(persistence(25) === 2);
console.log(persistence(999) === 4);