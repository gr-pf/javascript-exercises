const findTheOldest = function (arr) {
  const thisYear = new Date().getFullYear();
  const arrByAge = arr.toSorted(function (a, b) {
    if (a.yearOfDeath === undefined) {
      return b.yearOfDeath - b.yearOfBirth - (thisYear - a.yearOfBirth);
    } else if (b.yearOfDeath === undefined) {
      return thisYear - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
    } else {
      return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
    }
  });
  return arrByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
