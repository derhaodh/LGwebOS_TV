import { WebsiteStoreModel } from "./website-store"

test("can be created", () => {
  const instance = WebsiteStoreModel.create({})

  expect(instance).toBeTruthy()
})
