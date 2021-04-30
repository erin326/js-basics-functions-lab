function distanceFromHqInBlocks(pickUpLocation) {
    let numberOfBlocks;
    if (pickUpLocation > 42) {
        numberOfBlocks = pickUpLocation - 42;

    } else if (pickUpLocation <= 42) {
        numberOfBlocks = 42 - pickUpLocation;
    }
    return numberOfBlocks;
}

function distanceFromHqInFeet(pickUpLocation) {
    const distance = distanceFromHqInBlocks(pickUpLocation);
    return distance * 264;

}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation) {
    let distance;
    if (pickUpLocation >= dropOffLocation) {
        distance = (pickUpLocation - dropOffLocation) * 264;
    } else {
        distance = (dropOffLocation - pickUpLocation) * 264;
    }
    return distance; 
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let bill;
    if (distance <= 400) {
        bill = 0;
    }else if(distance > 400 && distance <= 2000) {
        bill = (distance - 400) * 0.02 ;
    }else if (distance > 2000 && distance <= 2500) {
        bill = 25;
    } else {
        bill = "cannot travel that far";
    }
    return bill;
}