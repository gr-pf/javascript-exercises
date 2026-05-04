const totalIntegers = function (obj) {
  if (
    ["function", "number", "string", "undefined", "boolean"].includes(
      typeof obj,
    ) ||
    obj === null
  ) {
    return;
  }
  let total = 0;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "number") {
      if (!isNaN(obj[key]) && Number.isInteger(obj[key])) {
        total++;
      }
    } else {
      const subTotal = totalIntegers(obj[key]);
      if (subTotal) {
        total += subTotal;
      }
    }
  }
  return total;
};

// Do not edit below this line
module.exports = totalIntegers;
