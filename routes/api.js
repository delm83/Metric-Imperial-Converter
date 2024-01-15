'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', async (req, res)=>{
  try{
    let input = req.query.input;
    let invalidNumber=false;
    let invalidUnit = true;
    if(/\d*\.+\d*\.+/.test(input)||/\/\d*\.*\d*\//.test(input)){
    invalidNumber=true;}

    if(/^mi$|^km$|^gal$|^L$|^lbs$|^kg$/.test(convertHandler.getUnit(input))){
      invalidUnit=false;
    }

    if(invalidNumber&&invalidUnit){
      throw "invalid number and unit"
    }

    if(invalidNumber){
      throw "invalid number"
    }

    if(invalidUnit){
      throw "invalid unit"
    }
      
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: convertHandler.getString(initNum, initUnit, returnNum, returnUnit)})
    
  }catch(err){
    res.json({error: err});
  }
    });
};
