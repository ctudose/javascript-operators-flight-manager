"use strict"

var assert = require('assert');
var flights = require('../logic/flights');


describe('Test flights number', function() {
   it('should calculate the number of flights', function() {
      assert.equal(15, flights.calculateNumberOfFlights(1500, 100), "You need 15 flights having capacity 100 to carry 1500 passengers");
      assert.equal(16, flights.calculateNumberOfFlights(1501, 100), "You need 16 flights having capacity 100 to carry 1500 passengers");
   })
});

describe('Test exceptions generated by flights number calculation', function() {
   it('should check exceptions are thrown', function() {
      assert.throws(function () { flights.calculateNumberOfFlights(1500.7, 10) }, Error, "The number of passengers must be a positive integer value");
      assert.throws(function () { flights.calculateNumberOfFlights(-1500, 10) }, Error, "The number of passengers must be a positive integer value");
      assert.throws(function () { flights.calculateNumberOfFlights(1500, 10.7) }, Error, "The capacity of the flight must be a positive integer value");
      assert.throws(function () { flights.calculateNumberOfFlights(1500, -10) }, Error, "The capacity of the flight must be a positive integer value");
   })
});

describe('Test aircraft revision', function() {
   it('should check the flights revision', function() {
      assert.equal("The revision needs to be done within the next 3 months", flights.checkAircraftRevision(50000, [10000, 1200, 4500, 3500]), "The revision should be done within the next 3 months");
      assert.equal("The revision needs to be done within the next 2 months", flights.checkAircraftRevision(50000, [10000, 12000, 4500, 3500]), "The revision should be done within the next 2 months");
      assert.equal("The revision needs to be done within the next month", flights.checkAircraftRevision(50000, [10000, 12000, 4500, 3500, 10000]), "The revision should be done within the next month");
      assert.throws(function () {flights.checkAircraftRevision(50000, [10000, 12000, 8700, 9500, 10000])}, Error, "The maximum allowed flight distance should be exceeded");
   })
});