/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

--- EXAMPLES ---
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

=== PEDAC ===
=P
Input: 2D array
Output: 1D array

=D
We want to keep input as arrays.
Use a loop along with 4 trackers for the boudries on the x and y axis

=Algorithm
- Loop until every index of all arrays has been visited
  - go currentDirection till you hit boundry and add all elements visited to new array
*/

function snail(square) {
  if (square[0][0] === undefined) return []; // return empty array if empty input
  
  let numOfIndexes = square.length ** 2;
  let snailArray = [];
  let x = 0;
  let y = 0;
  
  snailArray.push(square[y][x]); // push first element to avoid computeCoordinates error
  
  for(let count = 0; count < numOfIndexes; count += 1) {
    computeCoordinates()
    snailArray.push(square[y][x]);
  }
  
  let xMax = square.length;
  let yMax = square.length;
  let direction = 'right';
  
  function computeCoordinates() {
    switch (direction) {
      case 'right':
        x += 1;
        if (isBoundry(y, x)) {
          x -= 1;
          
        }
        ;
        break;
    }
  }

  return snailArray;
}



// TESTS
console.log(snail([[]]) === []);
console.log(snail([[1]]) === [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) === [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]) === [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);