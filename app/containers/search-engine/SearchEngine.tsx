import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Div } from "react-native-magnus"
import { useStores } from "../../models"
import { Website } from "../../components"

interface SearchEngineContainerProps {}

export const SearchEngineContainer: React.FC<SearchEngineContainerProps> = observer(
  function SearchEngineContainer() {
    const { websiteStore } = useStores()

    const data = websiteStore.searchEngines

    const searchEnginesList = data.map((item) => {
      return <Website key={item.id} {...item} />
    })

    return <Div>{searchEnginesList}</Div>
  },
)
