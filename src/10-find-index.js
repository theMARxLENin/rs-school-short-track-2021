/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  if (value < array[0] || value > array[array.length - 1]) {
    return 0;
  }
  let ceil = array.length;
  let mid = Math.floor(array.length / 2);
  while (mid > 0) {
    if (array[mid] === value) {
      return mid;
    }
    if (array[mid] > value) {
      ceil = mid;
      mid = Math.floor(mid / 2);
    } else if (array[mid] < value) {
      mid += Math.floor((ceil - mid) / 2);
    }
  }
  return 0;
}

module.exports = findIndex;
