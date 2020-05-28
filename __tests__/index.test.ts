const { location } = require("../data")

describe("Location tests", () => {
  test("Location data should be present", () => {
    expect(location).toBeDefined()
  })
})
