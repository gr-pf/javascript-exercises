const removeFromArray = function (arr, ...numbers) {
  if (numbers.length === 0) {
    return arr;
  }
  let res = arr.slice();
  for (let num of numbers) {
    res = res.filter((item) => item !== num);
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
