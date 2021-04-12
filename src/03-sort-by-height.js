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
function sortByHeight(arr) {
  const res = [];
  const positives = arr.filter((num) => num > -1);
  arr.forEach((num) => {
    if (num === -1) {
      res.push(num);
    } else {
      const min = Math.min(...positives);
      res.push(min);
      positives.splice(positives.indexOf(min), 1);
    }
  });
  return res;
}

module.exports = sortByHeight;
