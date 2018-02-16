
var sort = require('../sort');
var assert = require('assert');

describe('#addNumber()', function() {
    it('It should return a message if a number was not passed', function() {
     assert.equal(sort.addNumber('x'), 'x is not recognized as a number');
    });
    it('It should return a message if a NaN was passed', function() {
     assert.equal(sort.addNumber(NaN), 'NaN is not recognized as a number');
    });    
    it('It should return value passed when a valid number is passed', function() {
     assert.equal(sort.addNumber(10), 10);
    }); 
});

describe('#createRandomInteger(min,max)', function() {
	for (var i = 0; i < 100; i++) {
	    it('Returns a random whole number between 1 and 10', function() {
    		var n = sort.createRandomInteger(1,10);
	    	assert.equal(Math.floor(n), Math.ceil(n) );
		});
	}
}); 
