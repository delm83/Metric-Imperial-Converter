const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('#isNumber, #isNotNumber', function () {
        assert.isNumber(convertHandler.getNum("12"), 'input is a whole number');
        assert.isNumber(convertHandler.getNum("12.5"), 'input is a decimal number');
        assert.isNumber(convertHandler.getNum("4/5"), 'input is a fractional number');
        assert.isNumber(convertHandler.getNum("4.5/5.5"), 'input is a fractional number with decimal');
      });
});