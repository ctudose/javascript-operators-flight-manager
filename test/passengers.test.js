"use strict"

var assert = require('assert');
var passengers = require('../logic/passengers');
var util = require('../logic/util');

describe('Test seats distribution', function() {
   it('should distribute the seats by passenger type and seat type', function() {
      let distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 1200, 13, 18, 200);
      assert.equal(150, passengers.distributeAllSeatsToAllPassengers(150, 1200, 13, 18, 200).vipPassengersWithBusinessSeats, "You must distribute 150 VIP passengers to business seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 1200, 13, 18, 200).vipPassengersWithEconomySeats, "You must distribute 0 VIP passengers to economy seats");
      assert.equal(84, passengers.distributeAllSeatsToAllPassengers(150, 1200, 13, 18, 200).regularPassengersWithBusinessSeats, "You must distribute 84 regular passengers to business seats");
      assert.equal(1116, passengers.distributeAllSeatsToAllPassengers(150, 1200, 13, 18, 200).regularPassengersWithEconomySeats, "You must distribute 1116 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 18, 200);
      assert.equal(18, passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 18, 200).vipPassengersWithBusinessSeats, "You must distribute 18 VIP passengers to business seats");
      assert.equal(132, passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 18, 200).vipPassengersWithEconomySeats, "You must distribute 132 VIP passengers to economy seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 18, 200).regularPassengersWithBusinessSeats, "You must distribute 0 passengers regular  to business seats");
      assert.equal(68, passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 18, 200).regularPassengersWithEconomySeats, "You must distribute 68 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 1200, 2, 18, 200);
      assert.equal(36, passengers.distributeAllSeatsToAllPassengers(150, 1200, 2, 18, 200).vipPassengersWithBusinessSeats, "You must distribute 36 VIP passengers to business seats");
      assert.equal(114, passengers.distributeAllSeatsToAllPassengers(150, 1200, 2, 18, 200).vipPassengersWithEconomySeats, "You must distribute 114 VIP passengers to economy seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 1200, 2, 18, 200).regularPassengersWithBusinessSeats, "You must distribute 0 passengers regular  to business seats");
      assert.equal(286, passengers.distributeAllSeatsToAllPassengers(150, 1200, 2, 18, 200).regularPassengersWithEconomySeats, "You must distribute 286 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 1, 100, 250);
      assert.equal(100, passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 100, 250).vipPassengersWithBusinessSeats, "You must distribute 100 VIP passengers to business seats");
      assert.equal(50, passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 100, 250).vipPassengersWithEconomySeats, "You must distribute 50 VIP passengers to economy seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 100, 250).regularPassengersWithBusinessSeats, "You must distribute 0 passengers regular  to business seats");
      assert.equal(200, passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 100, 250).regularPassengersWithEconomySeats, "You must distribute 200 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 1, 150, 200);
      assert.equal(150, passengers.distributeAllSeatsToAllPassengers(150, 200, 1, 150, 200).vipPassengersWithBusinessSeats, "You must distribute 150 VIP passengers to business seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 200, 1, 150, 200).vipPassengersWithEconomySeats, "You must distribute 0 VIP passengers to economy seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 200, 1, 150, 200).regularPassengersWithBusinessSeats, "You must distribute 0 passengers regular  to business seats");
      assert.equal(200, passengers.distributeAllSeatsToAllPassengers(150, 200, 1, 150, 200).regularPassengersWithEconomySeats, "You must distribute 200 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 125);
      assert.equal(100, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 125).vipPassengersWithBusinessSeats, "You must distribute 100 VIP passengers to business seats");
      assert.equal(50, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 125).vipPassengersWithEconomySeats, "You must distribute 50 VIP passengers to economy seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 125).regularPassengersWithBusinessSeats, "You must distribute 0 passengers regular  to business seats");
      assert.equal(200, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 125).regularPassengersWithEconomySeats, "You must distribute 200 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 126);
      assert.equal(100, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 126).vipPassengersWithBusinessSeats, "You must distribute 100 VIP passengers to business seats");
      assert.equal(50, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 126).vipPassengersWithEconomySeats, "You must distribute 50 VIP passengers to economy seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 126).regularPassengersWithBusinessSeats, "You must distribute 0 passengers regular  to business seats");
      assert.equal(200, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 126).regularPassengersWithEconomySeats, "You must distribute 200 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 124);
      assert.equal(100, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 124).vipPassengersWithBusinessSeats, "You must distribute 100 VIP passengers to business seats");
      assert.equal(50, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 124).vipPassengersWithEconomySeats, "You must distribute 50 VIP passengers to economy seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 124).regularPassengersWithBusinessSeats, "You must distribute 0 passengers regular  to business seats");
      assert.equal(198, passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 124).regularPassengersWithEconomySeats, "You must distribute 198 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(15, 20, 2, 50, 124);
      assert.equal(15, passengers.distributeAllSeatsToAllPassengers(15, 200, 2, 50, 124).vipPassengersWithBusinessSeats, "You must distribute 15 VIP passengers to business seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(15, 200, 2, 50, 124).vipPassengersWithEconomySeats, "You must distribute 0 VIP passengers to economy seats");
      assert.equal(85, passengers.distributeAllSeatsToAllPassengers(15, 200, 2, 50, 124).regularPassengersWithBusinessSeats, "You must distribute 85 passengers regular  to business seats");
      assert.equal(115, passengers.distributeAllSeatsToAllPassengers(15, 200, 2, 50, 124).regularPassengersWithEconomySeats, "You must distribute 115 regular passengers to economy seats");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 20, 2, 50, 124);
      assert.equal(100, passengers.distributeAllSeatsToAllPassengers(150, 20, 2, 50, 124).vipPassengersWithBusinessSeats, "You must distribute 100 VIP passengers to business seats");
      assert.equal(50, passengers.distributeAllSeatsToAllPassengers(150, 20, 2, 50, 124).vipPassengersWithEconomySeats, "You must distribute 50 VIP passengers to economy seats");
      assert.equal(0, passengers.distributeAllSeatsToAllPassengers(150, 20, 2, 50, 124).regularPassengersWithBusinessSeats, "You must distribute 0 passengers regular  to business seats");
      assert.equal(20, passengers.distributeAllSeatsToAllPassengers(150, 20, 2, 50, 124).regularPassengersWithEconomySeats, "You must distribute 20 regular passengers to economy seats");
   })
});

describe('Test total seats distribution', function() {
   it('should check the number of total distributed seats', function() {
      let distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 1200, 13, 18, 200);
      let totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(1350, totalDistributedPassengers, "You must distribute a total of 1350 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 1200, 1, 18, 200);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(218, totalDistributedPassengers, "You must distribute a total of 218 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 1200, 2, 18, 200);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(436, totalDistributedPassengers, "You must distribute a total of 436 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 1, 100, 250);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(350, totalDistributedPassengers, "You must distribute a total of 350 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 1, 150, 200);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(350, totalDistributedPassengers, "You must distribute a total of 350 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 125);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(350, totalDistributedPassengers, "You must distribute a total of 350 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 126);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(350, totalDistributedPassengers, "You must distribute a total of 350 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 200, 2, 50, 124);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(348, totalDistributedPassengers, "You must distribute a total of 348 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(15, 20, 2, 50, 124);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(35, totalDistributedPassengers, "You must distribute a total of 35 passengers");

      distributedPassengers = passengers.distributeAllSeatsToAllPassengers(150, 20, 2, 50, 124);
      totalDistributedPassengers = util.calculateTotalDistributedPassengers(distributedPassengers);
      assert.equal(170, totalDistributedPassengers, "You must distribute a total of 170 passengers");
   })
});


describe('Test flight capacity', function() {
   it('should check the flight capacity', function() {
      let passengersNumber = passengers.checkFlightCapacity(1000, [132, 57, 63, 91]);
      assert.equal(343, passengersNumber, "You must have 343 passengers");
      assert.throws(function () { passengers.checkFlightCapacity(100, [132, 57, 63, 91]) }, Error, "The capacity of the flight is exceeded");
   })
});