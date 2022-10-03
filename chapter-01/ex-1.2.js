"use strict";

// Given two string write a function to check if one is a permutation from the other
function isPermutation(str1, str2) {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }

  let chars = new Map();

  for (var i = 0; i < str1.length; i++) {
    const counter = chars.get(str1[i]) + 1 || 1;
    chars.set(str1[i], counter);
  }

  for (var i = 0; i < str2.length; i++) {
    const currentStr = str2[i];
    const count = chars.get(currentStr);

    if (!count) {
      return false;
    }

    if (count === 1) {
      chars.delete(currentStr);
    } else {
      chars.set(currentStr, count - 1);
    }
  }

  return chars.size === 0;
}

console.assert(
  isPermutation("abcdefghi", "ihgfedcba"),
  "abcdefghi",
  "ihgfedcba"
);
console.assert(isPermutation("icarraci", "carcarii"), "icarraci", "carcarii");
console.assert(
  !isPermutation("1122334455667788", "9911223344556677"),
  "1122334455667788",
  "9911223344556677"
);
