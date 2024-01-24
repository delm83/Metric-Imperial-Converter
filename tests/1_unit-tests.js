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
        assert.equal(1, convertHandler.getNum("mi"), 'no numerical input provided');
        assert.equal("mi", convertHandler.getUnit("50mi"), "unit is mi");
        assert.equal("km", convertHandler.getUnit("50km"), "unit is km");
        assert.equal("gal", convertHandler.getUnit("50gal"), "unit is gal");
        assert.equal("L", convertHandler.getUnit("50L"), "unit is L");
        assert.equal("lbs", convertHandler.getUnit("50lbs"), "unit is lbs");
        assert.equal("kg", convertHandler.getUnit("50kg"), "unit is kg");
        assert.equal("invalid unit", convertHandler.getUnit("50mps"), "unit is invalid");
        assert.equal("km", convertHandler.getReturnUnit("mi"), "return unit for mi is km");
        assert.equal("mi", convertHandler.getReturnUnit("km"), "return unit for km is mi");
        assert.equal("L", convertHandler.getReturnUnit("gal"), "return unit for gal is L");
        assert.equal("gal", convertHandler.getReturnUnit("L"), "return unit for L is gal");
        assert.equal("kg", convertHandler.getReturnUnit("lbs"), "return unit for lbs is kg");
        assert.equal("lbs", convertHandler.getReturnUnit("kg"), "return unit for kg is lbs");
        assert.equal("miles", convertHandler.spellOutUnit("mi"), "mi is short for miles");
        assert.equal("kilometers", convertHandler.spellOutUnit("km"), "km is short for kilometers");
        assert.equal("gallons", convertHandler.spellOutUnit("gal"), "gal is short for gallons");
        assert.equal("litres", convertHandler.spellOutUnit("L"), "L is short for litres");
        assert.equal("pounds", convertHandler.spellOutUnit("lbs"), "lbs is short for pounds");
        assert.equal("kilograms", convertHandler.spellOutUnit("kg"), "kg is short for kilograms");
      });
});