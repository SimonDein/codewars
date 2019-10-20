/*
=== PROBLEM DESCRIPTION === 
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

/*
PEDAC
= P
Input: number
output: next number following rules or -1
rules: next number after input that has the same digits

= D
Array:
  - to work with the individual digits
  - join and coerce to number

= A
traverse digits from right to left (reverse)
  - find index of digit where previous digit is greater
    - if none return -1
  - find index of digit to the right of found digit that is greater than digit but smallest possible
  - swap digits at these indexes
  - sort digits from the first found index to the end
  - return digits



*/
function getIndexOfFirstDigitGreaterThanNext(digits) {
  return digits.findIndex((digit, index) => digits[index - 1] > digit);
}

function getIndexOfSmallestGreaterDigit(digits, threshold) {
  let smallestGreater = Infinity;
  let smallestGreaterIndex;
  let currentDigit;

  for(let i = 0; i < digits.length; i += 1) {
    currentDigit = digits[i];
    if (currentDigit > threshold && currentDigit < smallestGreater) {
      smallestGreater = currentDigit;
      smallestGreaterIndex = i;
    }
  }

  return smallestGreaterIndex;
}

function nextBigger(n){
  let digits = n.toString().split('').map((strDigit) => Number(strDigit));
  digits.reverse();

  swapIndex1 = getIndexOfFirstDigitGreaterThanNext(digits);
  if (swapIndex1 === -1) return -1;
  swapIndex2 = getIndexOfSmallestGreaterDigit(digits.slice(0, swapIndex1), digits[swapIndex1]);
  
  let temp = digits[swapIndex1];
  digits[swapIndex1] = digits[swapIndex2];
  digits[swapIndex2] = temp;

  let leftPart = digits.slice(0, swapIndex1);
  let rightPart = digits.slice(swapIndex1);

  leftPart.sort((a, b) => a > b ? -1 : 1);
    
  let nextBigger = leftPart.concat(rightPart);
  
  return Number(nextBigger.reverse().join(''));
}

// 2087 => 2780 => 2708
// 3241 => 3421 => 3412

console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(2087)); // 2708
console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); // 414


console.log(nextBigger(9)) // -1
console.log(nextBigger(111)) // -1
console.log(nextBigger(531)) // -1
console.log(nextBigger(565)) // 655
console.log(nextBigger(5654)) // 6455
console.log(nextBigger(3241)) // 3412

// 459583 => 483559

// 59884848483559
// 59884848534589