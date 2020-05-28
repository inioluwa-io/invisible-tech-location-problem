const { location } = require("../data")

test("Location data should be present", () => {
  console.log(location)
  expect(location).toBeDefined()
})
