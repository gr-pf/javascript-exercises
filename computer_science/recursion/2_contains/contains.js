const contains = function (obj, value) {
  let res = false;
  if (
    ["number", "string", "undefined", "boolean"].includes(typeof obj) ||
    obj === null
  ) {
    if (typeof obj === "number" && typeof value === "number" && isNaN(value)) {
      return res || isNaN(obj);
    }
    return res || obj === value;
  }
  for (const [key, val] of Object.entries(obj)) {
    res = res || contains(val, value);
    if (val === value) {
      return true;
    }
  }
  return res;
};

// Do not edit below this line
module.exports = contains;
