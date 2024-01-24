const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('#isWholeNumber', function () {
        assert.equal(12, convertHandler.getNum("12kg"), 'input is a whole number');
    })
    test('#isDecimalNumber', function () {
        assert.equal(12.5, convertHandler.getNum("12.5kg"), 'input is a decimal number');
    })
    test('#isFractionalNumber', function () {
        assert.equal(4/5, convertHandler.getNum("4/5kg"), 'input is a fractional number');
    })
    test('#isFractionalNumberWithDecimal', function () {
        assert.equal(4.5/5.5, convertHandler.getNum("4.5/5.5kg"), 'input is a fractional number with decimal');
      })
        test('#isDoubleFraction', function () {
        assert.equal('invalid number', convertHandler.getNum("2/5/9kg"), 'input is a double fraction');
        });

      test('#noNumericalInput', function () {
        assert.equal(1, convertHandler.getNum("mi"), 'no numerical input provided');
      });
      test('#unitIsMI', function () {
        assert.equal("mi", convertHandler.getUnit("50mi"), "unit is mi");
      });
        test('#unitIsKM', function () {
        assert.equal("km", convertHandler.getUnit("50km"), "unit is km");
      });
        test('#unitIsGal', function () {
        assert.equal("gal", convertHandler.getUnit("50gal"), "unit is gal");
      });
        test('#unitIsL', function () {
        assert.equal("L", convertHandler.getUnit("50L"), "unit is L");
      });
        test('#unitIsLbs', function () {
        assert.equal("lbs", convertHandler.getUnit("50lbs"), "unit is lbs");
      });
        test('#unitIsKg', function () {
        assert.equal("kg", convertHandler.getUnit("50kg"), "unit is kg");
      });
        test('#unitIsInvalid', function () {
        assert.equal("invalid unit", convertHandler.getUnit("50mps"), "unit is invalid");
      });
        test('#miConvertsToKM', function () {
        assert.equal("km", convertHandler.getReturnUnit("mi"), "return unit for mi is km");
      });
        test('#kmConvertsToMI', function () {
        assert.equal("mi", convertHandler.getReturnUnit("km"), "return unit for km is mi");
      });
        test('#galConvertsToL', function () {
        assert.equal("L", convertHandler.getReturnUnit("gal"), "return unit for gal is L");
      });
        test('#lConvertsToGal', function () {
        assert.equal("gal", convertHandler.getReturnUnit("L"), "return unit for L is gal");
      });
        test('#lbsConvertsToKg', function () {
        assert.equal("kg", convertHandler.getReturnUnit("lbs"), "return unit for lbs is kg");
      });
        test('#kgConvertsToLbs', function () {
        assert.equal("lbs", convertHandler.getReturnUnit("kg"), "return unit for kg is lbs");
      });
        test('#miEqualsMiles', function () {
        assert.equal("miles", convertHandler.spellOutUnit("mi"), "mi is short for miles");
      });
        test('#kmEqualsKilometers', function () {
        assert.equal("kilometers", convertHandler.spellOutUnit("km"), "km is short for kilometers");
      });
        test('#galEqualsGallons', function () {
        assert.equal("gallons", convertHandler.spellOutUnit("gal"), "gal is short for gallons");
      });
        test('#LEqualsLitres', function () {
        assert.equal("litres", convertHandler.spellOutUnit("L"), "L is short for litres");
      });
        test('#lbsEqualsPounds', function () {
        assert.equal("pounds", convertHandler.spellOutUnit("lbs"), "lbs is short for pounds");
      });
        test('#kgEqualsKilograms', function () {
        assert.equal("kilograms", convertHandler.spellOutUnit("kg"), "kg is short for kilograms");
      });
});