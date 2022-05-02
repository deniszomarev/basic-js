const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  return arr
    .filter(
      (numeric, index) =>
        arr[index + 1] !== "--discard-prev" &&
        arr[index - 1] !== "--discard-next"
    )
    .map((numeric, index) => {
      if (numeric === "--double-prev" && index > 0) {
        return arr[index - 1];
      } else if (
        numeric &&
        numeric === "--double-next" &&
        index < arr.length - 1
      ) {
        return arr[index + 1];
      } else {
        return numeric;
      }
    })
    .filter(
      (numeric) =>
        ![
          "--discard-prev",
          "--discard-next",
          "--double-prev",
          "--double-next",
        ].includes(numeric)
    );
}

module.exports = {
  transform,
};
