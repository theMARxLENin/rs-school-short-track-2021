/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  let previousArray = new Array(matrix[0].length);
  matrix.forEach((arr) => {
    res += arr.reduce((acc, num, i) => {
      if (previousArray[i] !== 0) {
        return acc + num;
      }
      return acc;
    }, 0);
    previousArray = arr;
  });
  return res;
}

module.exports = getMatrixElementsSum;
