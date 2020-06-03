import { bar } from "../src/foo"

describe("foo", () => {
  it("should work", () => {
    expect(bar).toBe("baz")
  })
})
