import { expect } from "chai";

function encodeAsURL(url) {
  if (!url || url.length === 0) {
    return url;
  }

  let spaceCount = 0;
  for (let i = 0; i < url.length; ++i) {
    if (url[i] === " ") {
      ++spaceCount;
    }
  }

  let newLength = url.length - 1 + 2 * spaceCount;
  for (let i = url.length - 1, j = newLength; i >= 0 && j > i; --i, --j) {
    if (url[i] === " ") {
      url[j] = "0";
      url[--j] = "2";
      url[--j] = "%";
    } else {
      url[j] = url[i];
    }
  }

  return url;
}

const str1 = " l o t s   o f   s p a c e ";
let expected = str1.replace(/ /g, "%20").split("");
expect(encodeAsURL(str1.split(""))).to.eql(expected);

const str2 = "http://www.google.com/search?q=something really really funny";
expected = str1.replace(/ /g, "%20").split("");
expect(encodeAsURL(str1.split(""))).to.eql(expected);
