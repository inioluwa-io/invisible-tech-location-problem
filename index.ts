export {}
const { location } = require("./data")

const getLocationTime = (arr: string[]): string[] =>
  arr.map((currLocation: string) =>
    location.find(
      (item: any) =>
        item.name === currLocation || item.postal_code === currLocation
    ).current_time
  )
module.exports = getLocationTime
