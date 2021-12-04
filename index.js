const returnFirstTwoDrivers = (array) => array.slice(0,2)
const returnLastTwoDrivers = (array) => array.slice(array.length - 2, array.length)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num
    }
}

const fareDoubler= createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(array, driversFunction) {
    return driversFunction(array)
}