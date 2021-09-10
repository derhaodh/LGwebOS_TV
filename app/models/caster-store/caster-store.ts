import { Instance, SnapshotOut, types } from "mobx-state-tree"
/**
 * Model description here for TypeScript hints.
 */
export const CasterStoreModel = types
  .model("CasterStore")
  .props({
    ipAddress: types.maybe(types.string),
    isConnected: types.optional(types.boolean, false),
    url: types.optional(types.string, "https://google.com"),
  })
  .views((self) => ({
    get getIpAdress() {
      return self.ipAddress
    },
    get geturl() {
      return self.url
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setIpAdress(ipadress) {
      self.ipAddress = ipadress
    },
    setUrl(url) {
      self.url = url
      console.log("onChange==>", self.url)
    },
    // intializeServer() {
    //   self.server.createServer(())
    // },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type CasterStoreType = Instance<typeof CasterStoreModel>
export interface CasterStore extends CasterStoreType {}
type CasterStoreSnapshotType = SnapshotOut<typeof CasterStoreModel>
export interface CasterStoreSnapshot extends CasterStoreSnapshotType {}
export const createCasterStoreDefaultModel = () => types.optional(CasterStoreModel, {})
