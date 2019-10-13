// Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

// The data structure is a multi-dimensional Array:

// [
//   [7,8,4,  1,5,9,  3,2,6],
//   [5,3,9,  6,7,2,  8,4,1],
//   [6,1,2,  4,3,8,  7,5,9],

//   [9,2,8,  7,1,5,  4,6,3],
//   [3,5,7,  8,4,6,  1,9,2],
//   [4,6,1,  9,2,3,  5,8,7],

//   [8,7,6,  3,9,4,  2,1,5],
//   [2,4,3,  5,6,1,  9,7,8],
//   [1,9,5,  2,8,7,  6,3,4]
// ]
// Rules for validation

// Data structure dimension: NxN where N > 0 and √N == integer
// Rows may only contain integers: 1..N (N included)
// Columns may only contain integers: 1..N (N included)
// 'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
// Note: the matrix may include non-integer elements.

/*
= Algorithm

- Board format is valid
  - N % 3 === 0 || N % 2 === 0
  - Board is N x N
- Numbers are valid
  - For each num
    - if notUniqueRow(num) || notUniqueColumn(num) || notUniqueSquare(num)
      - return false
    
  - return true;

*/

var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------



  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      let row
        for(let rowI = 0; rowI < data)
      return true;
    }
  };
};



var goodSudoku1 = new Sudoku([
  [7,8,4, 1,5,9, 3,2,6],
  [5,3,9, 6,7,2, 8,4,1],
  [6,1,2, 4,3,8, 7,5,9],

  [9,2,8, 7,1,5, 4,6,3],
  [3,5,7, 8,4,6, 1,9,2],
  [4,6,1, 9,2,3, 5,8,7],
  
  [8,7,6, 3,9,4, 2,1,5],
  [2,4,3, 5,6,1, 9,7,8],
  [1,9,5, 2,8,7, 6,3,4]
]);

var goodSudoku2 = new Sudoku([
  [1,4, 2,3],
  [3,2, 4,1],

  [4,1, 3,2],
  [2,3, 1,4]
]);

var badSudoku1 = new Sudoku([
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9]
]);

var badSudoku2 = new Sudoku([
  [1,2,3,4,5],
  [1,2,3,4],
  [1,2,3,4],  
  [1]
]);

console.log(goodSudoku1.isValid() === true);
console.log(goodSudoku2.isValid() === true);
console.log(badSudoku1.isValid() === false);
console.log(badSudoku2.isValid() === false);