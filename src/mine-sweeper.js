const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  const result = Array.from({ length: matrix.length }, () =>
    new Array(matrix[0].length).fill(0)
  );
  matrix.forEach((row, rowIndex) => {
    row.forEach((mine, mineIndex) => {
      let countMine = 0;
      if (matrix[rowIndex][mineIndex + 1]) {
        countMine++;
      }
      if (matrix[rowIndex + 1] && matrix[rowIndex + 1][mineIndex + 1]) {
        countMine++;
      }
      if (matrix[rowIndex + 1] && matrix[rowIndex + 1][mineIndex]) {
        countMine++;
      }
      if (matrix[rowIndex + 1] && matrix[rowIndex + 1][mineIndex - 1]) {
        countMine++;
      }
      if (matrix[rowIndex][mineIndex - 1]) {
        countMine++;
      }
      if (matrix[rowIndex - 1] && matrix[rowIndex - 1][mineIndex - 1]) {
        countMine++;
      }
      if (matrix[rowIndex - 1] && matrix[rowIndex - 1][mineIndex]) {
        countMine++;
      }
      if (matrix[rowIndex - 1] && matrix[rowIndex - 1][mineIndex + 1]) {
        countMine++;
      }
      result[rowIndex][mineIndex] = countMine;
    });
  });
  return result;
}

module.exports = {
  minesweeper,
};
