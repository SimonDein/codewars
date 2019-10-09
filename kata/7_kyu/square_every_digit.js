// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigit(digit) {
  return Number(digit) * Number(digit);
}

function squareDigits(number) {
  let digitsSquared = number.toString().replace(/\d/g, squareDigit);
  return Number(digitsSquared);
};


// Sample test cases
console.log(squareDigits(9119) === 811181);