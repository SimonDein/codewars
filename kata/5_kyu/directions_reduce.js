/*
=== PROBLEM DESCRIPTION
Once upon a time, on a way through the old wild west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].


Task
- Write a function dirReduc which will take an array of strings and returns an array of strings with the needless
directions removed (W<->E or S<->N side by side).


=== PEDAC
= P
Input: Array of strings
Output: Array of strings

Rules
  - Output array can't have East <-> West or North <-> South

= D
  - Keep as array

= A
  - reduced = []
  - Iterate 'directions'
    - if last item in 'reduced' is oppositeDirection(direction)
      - reduced.pop()
      - continue
    - reduced.push('direction')
*/

function dirReduc(directionsList) {
  return directionsList.reduce(nonContradictingDirections, []);
}

function nonContradictingDirections(reducedDirections, direction) {
  let lastAddedDirection = reducedDirections[reducedDirections.length - 1];
  if (isOppositeDirection(lastAddedDirection, direction)) {
    reducedDirections.pop();
    return reducedDirections;
  }
  return reducedDirections.concat(direction);
}

function isOppositeDirection(dir1, dir2) {
  return dir1 === 'NORTH' && dir2 === 'SOUTH' ||
         dir1 === 'SOUTH' && dir2 === 'NORTH' ||
           dir1 === 'WEST' && dir2 === 'EAST' ||
           dir1 === 'EAST' && dir2 === 'WEST';
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); //["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); //  ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
