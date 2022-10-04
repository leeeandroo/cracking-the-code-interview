"use strict";

import { expect } from "chai";

// Palindrome permutation

function isPalindromePermutation(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();

  for (let char of str) {
    if (char !== " ") {
      if (chars.has(char)) {
        chars.delete(char);
      } else {
        chars.add(char);
      }
    }
  }

  return chars.size <= 1;
}

[
  " ",
  "   ",
  "aabb",
  "ab a b",
  " a b a b ",
  "sasadfgsadfghjk;hjk;sadfghjk;dfghjk;",
  "sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;",
].forEach((arg) => {
  expect(isPalindromePermutation(arg.split(""))).to.be.true;
});
