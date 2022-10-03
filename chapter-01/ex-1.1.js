"use strict";

// String has all unique characters

function isAllCharsUnique(str) {
  let uniqueChars = new Set();

  for (var i = 0; i < str.length; i++) {
    if (uniqueChars.has(str[i])) {
      return false;
    }
    uniqueChars.add(str[i]);
  }

  return true;
}

console.assert(isAllCharsUnique("abcdefghjkl"), "abcdefghjkl", true);
console.assert(!isAllCharsUnique("abcdefghjkll"), "abcdefghjkll", false);
