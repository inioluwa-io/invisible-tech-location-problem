export {}
const { locations } = require("./data")

const getLocationTime: Function = (arr: []): any[] =>
  arr.map((currLocation: string) => {
    const currentLocation = locations.find(
      (location: any) =>
      location.name === currLocation || location.postal_code === currLocation
    )
    const currentTime = currentLocation ? currentLocation.current_time : false
    console.log(currentTime)
    return currentTime
  })
module.exports = getLocationTime
