export {}
const { location } = require("./data")

const getLocationTime = (arr: string[]): string[] =>
  arr.map((currLocation: string) => {
    const currentLocation = location.find(
      (item: any) =>
        item.name === currLocation || item.postal_code === currLocation
    )
    return currentLocation ? currentLocation.current_time : false
  })
module.exports = getLocationTime
