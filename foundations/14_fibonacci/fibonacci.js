// const fibonacci = function (n) {
//   if (+n === 0) {
//     return 0;
//   } else if (+n < 0) {
//     return "OOPS";
//   } else if (+n === 1 || +n === 2) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };

function fibonacci(n) {
  let cur = 1;
  let prec = 0;
  let tmp;
  if (+n < 0) {
    return "OOPS";
  } else if (+n === 0) {
    return 0;
  } else {
    for (let i = 1; i < +n; i++) {
      tmp = cur;
      cur = cur + prec;
      prec = tmp;
    }
  }
  return cur;
}

// Do not edit below this line
module.exports = fibonacci;
