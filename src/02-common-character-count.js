/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let count = 0;
  arr1.forEach((char) => {
    const i = arr2.findIndex((c) => c === char);
    if (i >= 0) {
      count++;
      arr2.splice(i, 1);
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
