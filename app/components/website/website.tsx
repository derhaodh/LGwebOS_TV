import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { WebsiteProps } from "./website.props"
import { flatten } from "ramda"
import { Div, Image, Text, Icon } from "react-native-magnus"
import { fontPreset } from "../text/text.presets"
import { useNavigation } from "@react-navigation/core"
import { WebViewScreen } from "../../screens"
import { CasterStoreModel, RootStoreModel, RootStoreProvider, useStores } from "../../models"
const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

// const TEXT: TextStyle = {
//   fontFamily: typography.primary,
//   fontSize: 14,
//   color: color.primary,
// }

/**
 * Describe your component here
 */
export const Website: React.FC<WebsiteProps> = observer(function Website(props: WebsiteProps) {
  const { id, name, image, style, isBookmarked } = props
  const { casterStore } = useStores()
  const styles = flatten([CONTAINER, style])
  const navigation = useNavigation()

  const onPressBookmark = (item) => {
    console.log(item)
  }

  return (
    <TouchableOpacity
      onPress={() => {
        casterStore.setUrl(`https:${image}`)
        navigation.navigate("webView")
      }}
    >
      <Div my={5} p={20} rounded="xl" flexDir="row">
        <Image
          resizeMode="contain"
          h={100}
          w={100}
          source={{ uri: `http://logo.clearbit.com/${image}?size=200` }}
        ></Image>
        <Div p={20} flex={2}>
          <Text color="#044244" fontSize={20} fontFamily={fontPreset.medium}>
            {name}
          </Text>
          <Text mt={10} color="gray600" fontSize={13} fontFamily={fontPreset.primary}>
            {image}
          </Text>
        </Div>
        <Div alignItems="center" flexDir="row-reverse" borderColor="#000000" flex={1}>
          <TouchableOpacity
            onPress={(e) => {
              onPressBookmark(e)
            }}
          >
            <Icon
              ml={20}
              bg="#044244"
              rounded="circle"
              p={10}
              name="star"
              color={isBookmarked ? "yellow300" : "white"}
              fontSize="xl"
              fontFamily="FontAwesome"
            />
          </TouchableOpacity>
        </Div>
      </Div>
    </TouchableOpacity>
  )
})
