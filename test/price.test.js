"use strict"

var assert = require('assert');
var price = require('../logic/price');

describe('Calculate final price for a ticket', function(){
   it('should calculate the final price for a ticket depending on increase and reduction percents', 
   function() {
      assert.equal(92.15, price.calculateFinalPrice(100, -5, -3), "Expected result: 92.15");
      assert.equal(97.85, price.calculateFinalPrice(100, -5, 3), "Expected result: 97.85");
      assert.equal(101.85, price.calculateFinalPrice(100, 5, -3), "Expected result: 101.85");
      assert.equal(108.15, price.calculateFinalPrice(100, 5, 3), "Expected result: 108.15");
})
});


describe('Calculate default final price for a ticket', function() {
   it('should calculate the default final price for a ticket depending on passenger type, flight type and base price', 
          function() {
             assert.equal(92.15, price.calculateDefaultFinalPrice(100, 'regular', 'economy'), "Expected result: 92.15");
             assert.equal(101.85, price.calculateDefaultFinalPrice(100, 'vip', 'economy'), "Expected result: 101.85");
             assert.equal(104.50, price.calculateDefaultFinalPrice(100, 'regular', 'business'), "Expected result: 104.50");
             assert.equal(115.50, price.calculateDefaultFinalPrice(100, 'vip', 'business'), "Expected result: 115.50");
   })
});

describe('Calculate total final price for a number of tickets', function() {
    it('should calculate the total final price for a number of tickets depending on passenger type, flight type and base price', 
           function() {
              assert.equal(460.75, price.calculateTotalFinalPrice(5, 'regular', 'economy', 100), "Expected result: 460.75");
              assert.equal(407.40, price.calculateTotalFinalPrice(4, 'vip', 'economy', 100), "Expected result: 407.40");
              assert.equal(209, price.calculateTotalFinalPrice(2, 'regular', 'business', 100), "Expected result: 209");
              assert.equal(346.50, price.calculateTotalFinalPrice(3, 'vip', 'business', 100), "Expected result: 346.50");
    })
 });