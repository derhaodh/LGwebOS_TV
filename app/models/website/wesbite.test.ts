import { WebsiteModel } from "./wesbite"

test("can be created", () => {
  const instance = WebsiteModel.create({})

  expect(instance).toBeTruthy()
})
