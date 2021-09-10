import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Div } from "react-native-magnus"
import { useStores } from "../../models"
import { Website } from "../../components"
import { NavigatorParamList } from "../../navigators"
import { useNavigation } from "@react-navigation/core"

interface DramaSiteContainerProps {
  category: string
}

export const DramaSiteContainer: React.FC<DramaSiteContainerProps> = observer(
  function SearchEngineContainer(props) {
    const { category } = props

    const { websiteStore } = useStores()
    console.log(category)

    const data = websiteStore.getDataByCategory(category)
    // useEffect(() => {
    // }, [])

    const dramaSiteList = data.map((item) => {
      return <Website key={item.id} {...item} />
    })

    return <Div>{dramaSiteList}</Div>
  },
)
