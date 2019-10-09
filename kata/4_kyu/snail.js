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

*/

const DIRECTIONS = ['right', 'down', 'left', 'up'];

function snail(square) {
  if (square.length < 2) return square[0];
  
  let numOfIndexes = square.length ** 2;
  let snailArray = [];
  let direction = 'right';
  let xMax = square.length - 1;
  let yMax = square.length - 1;
  let xMin = 0;
  let yMin = 0;
  let x = 0;
  let y = 0;

  snailArray.push(square[y][x]);

  for(let count = 1; count < numOfIndexes; count += 1) {
    if(isBoundry()) {
      updateBoundries();
      changeDirection();
    }

    goCurrentDirection();
    snailArray.push(square[y][x]);
  }

  function goCurrentDirection() {
    if (direction === 'right') {
      x += 1;
    } else if (direction === 'down') {
      y += 1;
    } else if (direction === 'left') {
      x -= 1;
    } else if (direction === 'up') {
      y -= 1;
    }
  }

  function updateBoundries() {
    if (direction === 'right') {
      yMin += 1
    } else if (direction === 'down') {
      xMax -= 1;
    } else if (direction === 'left') {
      yMax -= 1;
    } else if (direction === 'up') {
      xMin += 1;
    }
  }

  function changeDirection() {
    let newDirection = DIRECTIONS[DIRECTIONS.indexOf(direction) + 1];
    if (newDirection === undefined) newDirection = 'right';
    direction = newDirection;
  }
  
  function isBoundry() {
    return direction === 'right' && x === xMax ||
           direction === 'down' && y === yMax ||
           direction === 'left' && x === xMin ||
           direction === 'up' && y === yMin;
  }
  
  return snailArray;
}



// TESTS
console.log(snail([[]]));
console.log(snail([[1]]));
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
