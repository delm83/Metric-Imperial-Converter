const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('#isNumber, #isNotNumber', function () {
        assert.isNumber(convertHandler.getNum("12kg"), 'input is a whole number');
        assert.isNumber(convertHandler.getNum("12.5kg"), 'input is a decimal number');
        assert.isNumber(convertHandler.getNum("4/5kg"), 'input is a fractional number');
        assert.isNumber(convertHandler.getNum("4.5/5.5kg"), 'input is a fractional number with decimal');
        assert.isNotNumber(convertHandler.getNum("2/5/9kg"), 'input is a double fraction');
        });

      test('#equal, #notEqual', function () {
        assert.equal(1, convertHandler.getNum("kg"), 'no numerical input provided');
      });
});