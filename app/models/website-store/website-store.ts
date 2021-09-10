import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { WebsiteModel, WebsiteSnapshot } from "../website/wesbite"
import { WebsitesData } from "../../containers/search-engine/dummyData"
/**
 * Model description here for TypeScript hints.
 */
export const WebsiteStoreModel = types
  .model("WebsiteStore")
  .props({
    websites: types.optional(types.array(WebsiteModel), []),
  })
  .extend(withEnvironment)
  .views((self) => ({
    get searchEngines() {
      return self.websites.filter((website) => website.category === "searchEngine")
    },
    get dramaSites() {
      return self.websites.filter((website) => website.category === "dramaSite")
    },
    getDataByCategory: (category) => {
      return self.websites.filter((website) => website.category === category)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveWebsites: (websiteSnapshots: WebsiteSnapshot[]) => {
      self.websites.replace(websiteSnapshots)
    },
    addWebsite: (websiteSnapshots: WebsiteSnapshot[]) => {
      self.websites.push({
        id: 10,
        name: "netflix",
        image: "netflix.com",
        category: "dramaSite",
        isBookmarked: false,
      })
      return websiteSnapshots
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    getData: () => {
      self.saveWebsites(WebsitesData)
    },
  }))
type WebsiteStoreType = Instance<typeof WebsiteStoreModel>
export interface WebsiteStore extends WebsiteStoreType {}
type WebsiteStoreSnapshotType = SnapshotOut<typeof WebsiteStoreModel>
export interface WebsiteStoreSnapshot extends WebsiteStoreSnapshotType {}
export const createWebsiteStoreDefaultModel = () => types.optional(WebsiteStoreModel, {})
