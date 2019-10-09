
function encodeRailFenceCipher(text, railsCount) {
  if (text.length === 0) return '';

  let characters = text.split('');
  let rails = makeArrayWithNElements(railsCount, []);
  
  zigZagFor(characters.length, function (railIndex, characterIndex) {
    rails[railIndex].push(characters[characterIndex])
    characterIndex += 1;
  }, railsCount);
  
  return rails.reduce((cipher, rail) => cipher + rail.join(''), ''); // flat() is incompatible with CW environment
}

function decodeRailFenceCipher(cipher, railsCount) {
  let railLengths = getRailLengths(cipher.length, railsCount);
  let railCharacters = getRailCharacters(railLengths, cipher);
  let decipher = readRails(railCharacters, railsCount);

  return decipher;
}

// ============ HELPER FUNCTIONS ============
function getRailLengths(zigZagEnd, railsCount) {
  let railLengths = makeArrayWithNElements(railsCount, 0);

  zigZagFor(zigZagEnd, function (index) {
    railLengths[index] += 1;
  }, railsCount);

  return railLengths;
}

function getRailCharacters(railLengths, text) {
  let characters = text.split('');
  let railCharacters = [];
  
  railLengths.forEach(function (length){
    railCharacters.push(characters.splice(0, length));
  });

  return railCharacters;
}

function readRails(railCharacters, railsCount) {
  let decipher = '';
  let zigZagEnd = railCharacters.reduce((count, rail) => count + rail.length, 0); // flat() is incompatible with CW environment

  zigZagFor(zigZagEnd, function (index) {
    decipher += railCharacters[index].shift()
  }, railsCount)
  
  return decipher;
}

function zigZagFor(end, callback, width = 3) {
  let turnThreshold = width - 1;
  let thresholdTracker = -1;
  let zigZagIndex = 0;
  let increment = 1;
  
  for(let start = 0; start < end; start += 1) {
    callback(zigZagIndex, start); 
    thresholdTracker += 1;
    if (thresholdTracker === turnThreshold) {
      thresholdTracker = 0;
      increment = -increment;
      zigZagIndex += increment;
      continue;
    } 
    zigZagIndex += increment;
  }
}

function makeArrayWithNElements(length, value) {
  let arr = [];
  for(let i = length; i > 0; i -= 1) {
    if (value instanceof Array) value = value.slice();
    arr.push(value);
  }
  return arr;
}

console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) === "WECRLTEERDSOEEFEAOCAIVDEN");
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3) === "WEAREDISCOVEREDFLEEATONCE");
console.log(encodeRailFenceCipher("Hello, World!", 3) === "Hoo!el,Wrdl l");
