const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, next) => sum + next, 0);
};

const multiply = function (arr) {
  return arr.reduce((prod, next) => prod * next, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let res = 1;
  for (let i = a; i > 0; i--) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
