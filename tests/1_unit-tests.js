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
    assert.isNumber(4/5, convertHandler.getNum("4/5kg"), 'input is a fractional number');
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
  test('#readCorrectInputUnit', function () {
    assert.equal("mi", convertHandler.getUnit("50mi"), "unit is mi");
    assert.equal("km", convertHandler.getUnit("50km"), "unit is km");
    assert.equal("gal", convertHandler.getUnit("50gal"), "unit is gal");
    assert.equal("L", convertHandler.getUnit("50L"), "unit is L");
    assert.equal("lbs", convertHandler.getUnit("50lbs"), "unit is lbs");
    assert.equal("kg", convertHandler.getUnit("50kg"), "unit is kg");
  });
    test('#unitIsInvalid', function () {
    assert.equal("invalid unit", convertHandler.getUnit("50mps"), "unit is invalid");
  });
    test('#returnCorrectReturnUnit', function () {
    assert.equal("km", convertHandler.getReturnUnit("mi"), "return unit for mi is km");
    assert.equal("mi", convertHandler.getReturnUnit("km"), "return unit for km is mi");
    assert.equal("L", convertHandler.getReturnUnit("gal"), "return unit for gal is L");
    assert.equal("gal", convertHandler.getReturnUnit("L"), "return unit for L is gal");
    assert.equal("kg", convertHandler.getReturnUnit("lbs"), "return unit for lbs is kg");
    assert.equal("lbs", convertHandler.getReturnUnit("kg"), "return unit for kg is lbs");
  });
    test('#returnCorrectSpelledOutString', function () {
    assert.equal("miles", convertHandler.spellOutUnit("mi"), "mi is short for miles");
    assert.equal("kilometers", convertHandler.spellOutUnit("km"), "km is short for kilometers");
    assert.equal("gallons", convertHandler.spellOutUnit("gal"), "gal is short for gallons");
    assert.equal("litres", convertHandler.spellOutUnit("L"), "L is short for litres");
    assert.equal("pounds", convertHandler.spellOutUnit("lbs"), "lbs is short for pounds");
    assert.equal("kilograms", convertHandler.spellOutUnit("kg"), "kg is short for kilograms");
  })
  test('#convertGallonsToLitres', function () {
    assert.equal(15.14164, convertHandler.convert(4, "gal"));
  });
  test('#convertLitresToGallons', function () {
    assert.equal(6.07596, convertHandler.convert(23, "L"));
  });
  test('#convertMilesToKilometers', function () {
    assert.equal(19.31208, convertHandler.convert(12, "mi"));
  });
  test('#convertKilometersToMiles', function () {
    assert.equal(27.96177, convertHandler.convert(45, "km"));
  });
  test('#convertLbsToKgs', function () {
    assert.equal(15.87572, convertHandler.convert(35, "lbs"));
  });
  test('#convertKgsToLbs', function () {
    assert.equal(147.70984, convertHandler.convert(67, "kg"));
  });
});

