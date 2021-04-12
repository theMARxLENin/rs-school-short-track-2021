/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  const arr = str.match(/([a-zA-Z])\1*/g) || [];
  arr.forEach((ltr) => {
    res += `${ltr.length > 1 ? ltr.length : ''}${ltr[0]}`;
  });
  return res;
}

module.exports = encodeLine;
