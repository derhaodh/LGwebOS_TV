import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ImageBackground, ViewStyle, ImageStyle, TouchableOpacity } from "react-native"
import { CastButton, NetworkModal } from "../../components"
import { Div, Icon, Text } from "react-native-magnus"
import { fontPreset } from "../../components/text/text.presets"
import { ScrollView } from "react-native-gesture-handler"
import { DramaSiteContainer } from "../../containers/drama-site/drama-site"
import { useStores } from "../../models"
import { NetworkInfo } from "react-native-network-info"
import { useNavigation } from "@react-navigation/native"

const scrollViewStyle: ViewStyle = {
  height: "100%",
  width: "100%",
  flex: 1,
  backgroundColor: "#fc8181",
}

const tabStyle: ViewStyle = {
  borderBottomColor: "#044244",
  borderBottomWidth: 4,
  paddingVertical: 6,
}

const notSelectedBottom: ViewStyle = {
  borderBottomWidth: 0,
}

enum Category {
  SE = "searchEngine",
  DS = "dramaSite",
}

// Refactor to styled components
// We typically name them ComponentName.styles.js (or tsx if you were using typescript).
// We export each of the styled components as named exports and they're typically imported back into the file like import * as S from 'ComponentName.styles'
// consider twin macro and styled components
export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  const [onCategory, setCategory] = useState<Category>(Category.SE)
  const [isModalVisible, setModalVisibility] = useState<boolean>(false)

  const getBottomWidth = (tab: string) => {
    return tab !== onCategory ? notSelectedBottom : null
  }

  const { casterStore } = useStores()
  const { ipAddress, isConnected } = casterStore

  React.useEffect(() => {
    NetworkInfo.getIPAddress().then((ipAddress) => {
      casterStore.setIpAdress(ipAddress)
    })
  }, [])

  return (
    <ScrollView style={scrollViewStyle}>
      <Div testID="HomeScreen" p={20} flex={1}>
        <Div flexDir="row" justifyContent="space-between">
          <Div flexDir="row">
            <Icon
              name="television-box"
              color={"white"}
              fontSize="6xl"
              fontFamily="MaterialCommunityIcons"
            />
            <Text color="white" fontSize="2xl" fontFamily={fontPreset.primary}>
              LGwebOS TV Caster
            </Text>
          </Div>
          <CastButton
            isConnected={isConnected}
            iconSize="5xl"
            isVisible={isModalVisible}
            setModalVisible={setModalVisibility}
          ></CastButton>
        </Div>
        <Text
          mt={30}
          textAlign="center"
          color="white"
          mb={10}
          fontSize="2xl"
          fontFamily={fontPreset.extraBold}
        >
          Cast your favorite movie to TV now !
        </Text>
      </Div>
      <Div roundedTop={30} bg="#fff2f2" flex={1} roundedBottom={30}>
        <Div row justifyContent="space-evenly">
          <TouchableOpacity
            style={[tabStyle, getBottomWidth(Category.SE)]}
            onPress={() => setCategory(Category.SE)}
          >
            <Text
              my={10}
              color={onCategory === "searchEngine" ? "#044244" : "gray500"}
              fontSize={20}
              fontFamily={fontPreset.bold}
            >
              Search Engine
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[tabStyle, getBottomWidth(Category.DS)]}
            onPress={() => setCategory(Category.DS)}
          >
            <Text
              my={10}
              color={onCategory === "dramaSite" ? "#044244" : "gray500"}
              fontSize={20}
              fontFamily={fontPreset.bold}
            >
              Popular Site
            </Text>
          </TouchableOpacity>
        </Div>
        <DramaSiteContainer category={onCategory} />
      </Div>
      <NetworkModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisibility}
        ipAddress={ipAddress}
      />
    </ScrollView>
  )
})
