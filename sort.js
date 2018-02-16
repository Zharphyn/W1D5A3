
var numberList = [];

// Export another function that returns a version of the data list that is sorted in ascending order.
// The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)

function getList() {
  numberList.sort(function (a, b) {
    return (a - b);
  });
  return numberList;
}

function addNumber(num) {
  if (typeof num === 'number' && !Number.isNaN(num)) {
    numberList.push(num);
  } else {
    return num + ' is not recognized as a number';
  }
  return num;
}

function createRandomInteger(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.getList = getList;
exports.addNumber = addNumber;
exports.createRandomInteger = createRandomInteger;