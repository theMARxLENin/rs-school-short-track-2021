/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = names;
  const counts = {};
  res.forEach((item) => { counts[item] = (counts[item] || 0) + 1; });
  Object.keys(counts).forEach((key) => {
    if (counts[key] > 1) {
      let v = 0;
      for (let i = 0; i < res.length; i++) {
        if (res[i] === key) {
          if (v) {
            res[i] = `${key}(${v || ''})`;
            counts[res[i]] = (counts[res[i]] || 0) + 1;
          }
          v++;
        }
      }
    }
  });
  return res;
}

module.exports = renameFiles;
