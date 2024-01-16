'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', async (req, res)=>{
  try{
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    if(initNum=='invalid number' && initUnit == 'invalid unit'){
      return res.json({string: "invalid number and unit"})
    }

    if(initNum == 'invalid number' ){
      return res.json({string: "invalid number"})
    }

    if(initUnit == 'invalid unit'){
      return res.json({string: "invalid unit"})
    }
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: convertHandler.getString(initNum, initUnit, returnNum, returnUnit)})
    
  }catch(err){
    res.json({error: err});
  }
    });

    app.post('/', async (req, res)=>{
      try{
        let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    if(initNum=='invalid number' && initUnit == 'invalid unit'){
      return res.json({string: "invalid number and unit"})
    }

    if(initNum == 'invalid number' ){
      return res.json({string: "invalid number"})
    }

    if(initUnit == 'invalid unit'){
      return res.json({string: "invalid unit"})
    }
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: convertHandler.getString(initNum, initUnit, returnNum, returnUnit)})
        
      }catch(err){
        res.json({error: err});
      }
        });
};
