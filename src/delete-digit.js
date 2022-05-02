const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n).split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] < str[i + 1]) {
      str.splice(str.indexOf(str[i]), 1);
      return +str.join("");
    }
  }
  str.splice(-1, 1);
  return +str.join("");
}

module.exports = {
  deleteDigit,
};
