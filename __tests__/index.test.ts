export {}
const { location } = require("../data")

describe("Location tests", () => {
  test("Location data should be present", () => {
    expect(location).toBeDefined()
  })
  test("Location should be an array of objects", () => {
    expect(location.length).toBeGreaterThan(0)
    location.forEach((item: any) => {
      expect(item).toHaveProperty("name")
      expect(item).toHaveProperty("postal_code")
      expect(item).toHaveProperty("current_time")
    })
  })
})
