"use strict"

function Flights() {

    function calculateNumberOfFlights(passengers, capacity) {
        let flights;

        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {
            throw new Error("The number of passengers must be a positive integer value")
        }

        if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {
            throw new Error("The capacity of the flight must be a positive integer value")
        }

        if (passengers % capacity == 0) {
            flights = passengers/capacity;
        } else {
            flights = Math.floor(passengers/capacity) + 1;
        }
        return flights;
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        let totalDistance = 0;
        let distance;
        for(distance of distancesArray) {
            totalDistance += distance;
        }
        if (totalDistance > distanceLimit) {
            throw new Error("Flight maximum allowed distance (" + distanceLimit + ") exceeded. No flight is allowed any longer, you need to make the revision immediately.");
        }

        if (totalDistance <= distanceLimit/2) {
            return "The revision needs to be done within the next 3 months";
        } else if (totalDistance <= 3 * distanceLimit/4) {
            return "The revision needs to be done within the next 2 months";
        } else {
            return "The revision needs to be done within the next month";
        }
     }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();
