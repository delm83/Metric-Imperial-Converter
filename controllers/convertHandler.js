function ConvertHandler() {
  

  let numString;
  let numerator;
  let denominator;

  
  this.getNum = function(input) {

    if(/\d*\.+\d*\.+/.test(input)||/\/\d*\.*\d*\//.test(input)){
    
    return 'invalid number';}

numString = input.match(/\d*\.?\d+/g);

if (numString == null){
return 1;
  }
 numerator = numString[0];
numString[1]==undefined? denominator = 1
: denominator = numString[1];
 let result = numerator/denominator;
return result
};
  
  this.getUnit = function(input) {
  let result = ''
  let arr = input.match(/[a-z]/ig);
  for (let i = 0; i < arr.length; i++) {
  result += arr[i];
  }
  return /^mi$|^km$|^gal$|^L$|^lbs$|^kg$/i.test(result)?
    result=='l'||result=='L'?
      'L'
      :result.toLowerCase() 
      :'invalid unit';
};
  
  this.getReturnUnit = function(initUnit) {
  let result;
  switch(initUnit){
  case "mi":
  result = 'km';
  break;
  case "km":
  result = 'mi';
  break;
  case "gal":
  result = 'L';
  break;
  case "L":
 result = 'gal';
  break;
  case "lbs":
  result = 'kg';
  break;
  case "kg":
  result = 'lbs';
  break;
  }
  return result;
  };
  
  this.spellOutUnit = function(unit) {
  let result;
  switch(unit){
  case "mi":
  result = 'miles';
  break;
  case "km":
  result = 'kilometers';
  break;
  case "gal":
  result = 'gallons';
  break;
  case "L":
  result = 'litres';
  break;
  case "lbs":
  result = 'pounds';
  break;
  case "kg":
  result = 'kilograms';
  break;
  }
  return result;
  };

  this.convert = function(initNum, initUnit) {
  const galToL = 3.78541;
  const lbsToKg = 0.453592;
  const miToKm = 1.60934;
  let result;
  switch(initUnit){
  case "mi":
  result = initNum * miToKm;
  break;
  case "km":
  result = initNum/miToKm;
  break;
  case "gal":
  result = initNum * galToL;
  break;
  case "L":
  result = initNum/galToL;
  break;
  case "lbs":
  result = initNum * lbsToKg;
  break;
  case "kg":
  result = initNum/lbsToKg;
  break;
  }
  return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    let initUnitString = this.spellOutUnit(initUnit);
    let returnUnitString = this.spellOutUnit(returnUnit);
 result = initNum+" "+initUnitString+" converts to "+returnNum+" "+returnUnitString;
  return result;
  };
  }
  
  module.exports = ConvertHandler;