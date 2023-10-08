const returnFirstTwoDrivers = (drivers)=>{
    const firstTwoDrivers = drivers.slice(0,2)
    return firstTwoDrivers
}
const returnLastTwoDrivers = (drivers)=>{
    const lastTwoDrivers = drivers.slice(2,4)
    return lastTwoDrivers
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function createFareMultiplier(multiplier){
    const fareMultiplier = (fare)=>{
        return fare*multiplier
    }
    return fareMultiplier
}
const doubler = createFareMultiplier(10)
const fareDoubler 
= (doubler) => {
    return doubler*2
}
const tripler = createFareMultiplier(12)
const fareTripler = (tripler)=>{
    return tripler*3
}
function selectDifferentDrivers(drivers , selectedDriver){
    return selectedDriver(drivers)
}