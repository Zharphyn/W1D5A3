
var sort = require('./sort');

function setupArray(num){
  for (var i = 0; i < num; i++){
    var randNum = sort.createRandomInteger(0, 100);
    sort.addNumber(randNum);
  }
  return sort.getList();
}

console.log(setupArray(10));