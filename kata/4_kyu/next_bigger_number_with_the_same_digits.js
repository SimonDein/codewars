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
iterate digits starting from the back (reverse)
  loop (for length of arr)
  - if currN is > digits[i]
    - switch their places
      - find smallest number combination of any digits before hand
      - break
  - else continue

  if newNum === inputNum return -1;
  return newNum
*/

function nextBigger(n){
  let digits = n.toString().split('').map((strDigit) => Number(strDigit));
  digits.reverse();
  let nexBigger;

  digits.forEach(function (digit, index) {
    let nextSmallerDigitIndex = digits.slice(index).findIndex((a) => a < digit);
    if (nextSmallerDigitIndex !== -1) {
      let temp = digits[index];
      digits[index] = digits[nextSmallerDigitIndex];
      digits[nextSmallerDigitIndex] = temp;

      /*
      Now that some of the number has been switched -
      find the smallest number from the digits occurring in the
      digits array before the switched out number.
      */
      
    }
  });
  
  digits = Number(digits.reverse().join(''));
  if (digits === n) return -1;
  return digits;
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
console.log(nextBigger(5654)) // 6554
console.log(nextBigger(3241)) // 3412