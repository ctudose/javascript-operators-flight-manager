"use strict"

var assert = require('assert');
var util = require('../logic/util');

describe('Test exceptions generated by wrong inputs', function() {
    it('should check exceptions are thrown', function() {
       assert.throws(function () { util.checkInput("") }, Error, "The input should not be empty");
       assert.throws(function () { util.checkInput("abc") }, Error, "The input should be a number");
    })
 });

describe('Test total number of passengers', function() {
   it('should check the total number of passengers', function() {
      let totalDistributedPassengers = util.calculateTotalNumberOfPassengers([135, 270, 270, 270, 270, 135]);
      assert.equal(1350, totalDistributedPassengers, "You must have a total of 1350 passengers");
   })
});

describe('Test total distance', function() {
   it('should check the total distance', function() {
      let totalDistance = util.calculateTotalDistance([1320, 574, 470, 633, 910, 780]);
      assert.equal(4687, totalDistance, "You must have a total distance of 4687");

      totalDistance = util.calculateTotalDistance([1320, 574, -470, 633, 910, -780]);
      assert.equal(3437, totalDistance, "You must have a total distance of 3437");
   })
});


describe('Test bonus', function() {
   it('should check the awarded bonus', function() {
      let points = util.calculateBonusPoints([1320, 574, -470, 633, 910, -780], [1200, -70, 890, -1000, 720, 890], 10, 5);
      assert.equal(528.7, points, "You must have 528.7 points");
   })
});