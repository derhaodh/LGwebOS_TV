import { CasterStoreModel } from "./caster-store"

test("can be created", () => {
  const instance = CasterStoreModel.create({})

  expect(instance).toBeTruthy()
})
