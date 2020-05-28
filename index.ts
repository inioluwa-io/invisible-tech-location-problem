export {}
const { location } = require("./data")

const getLocationTime: Function = (arr: []): any[] =>
  arr.map((currLocation: string) => {
    const currentLocation = location.find(
      (item: any) =>
        item.name === currLocation || item.postal_code === currLocation
    )
    const currentTime = currentLocation ? currentLocation.current_time : false
    console.log(currentTime)
    return currentTime
  })
module.exports = getLocationTime
