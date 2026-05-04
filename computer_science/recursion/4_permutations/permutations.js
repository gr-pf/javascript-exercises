/**
 *
 * @param {Array} arr
 * @returns
 */
const permutations = function (arr) {
  if (arr.length === 0) {
    return [[]];
  }
  return arr.flatMap((e) => {
    const reste = arr.filter((el) => el !== e);
    const sousPerm = permutations(reste);
    return sousPerm.map((el) => [e, ...el]);
  });
};

// Do not edit below this line
module.exports = permutations;
