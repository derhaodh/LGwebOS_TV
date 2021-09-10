import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */

export const WebsiteModel = types
  .model("Website")
  .props({
    id: types.identifierNumber,
    name: types.string,
    image: types.string,
    isBookmarked: types.boolean,
    category: types.enumeration(["searchEngine", "dramaSite"]),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type WebsiteType = Instance<typeof WebsiteModel>
export interface Website extends WebsiteType {}
type WebsiteSnapshotType = SnapshotOut<typeof WebsiteModel>
export interface WebsiteSnapshot extends WebsiteSnapshotType {}
export const createWebsiteDefaultModel = () => types.optional(WebsiteModel, {})
