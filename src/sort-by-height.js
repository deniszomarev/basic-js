const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

const sortByHeight = (arr) => {
  const filteredNumbers = arr.filter((el) => el >= 0);
  filteredNumbers.sort((a, b) => a - b);
  return arr.map((el) => {
    if (el >= 0) {
      return filteredNumbers.shift();
    } else {
      return el;
    }
  });
};

module.exports = {
  sortByHeight,
};
