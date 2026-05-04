const pascal = function (n) {
  if (n === 1) {
    return [1];
  }
  const baseArr = [0, ...pascal(n - 1), 0];
  const newArr = [];
  for (let i = 0; i < baseArr.length - 1; i++) {
    newArr.push(baseArr[i] + baseArr[i + 1]);
  }
  return newArr;
};

// Do not edit below this line
module.exports = pascal;
