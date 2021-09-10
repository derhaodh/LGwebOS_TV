import React, { useState, useEffect, useRef } from "react"
import { observer } from "mobx-react-lite"
import {
  KeyboardAvoidingView,
  TextInputChangeEventData,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  Platform,
  BackHandler,
} from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import styled from "styled-components/native"
import { Text, Icon, Input, useStateCallback } from "react-native-magnus"
import { fontPreset } from "../../components/text/text.presets"
import { WebView } from "react-native-webview"
import { useStores } from "../../models"
import { useNavigation } from "@react-navigation/core"
import { TouchableHighlight } from "react-native-gesture-handler"

const CONTAINER = styled.View`
  background-color: #ffffff;
  flex: 1;
  flex-direction: column;
`

const HEADER = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  height: 75px;
`

const WEBVIEW_WRAPPER = styled.View`
  height: 85%;
`

const FOOTER = styled.View`
  background-color: #38b2ac;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
`

export const WebViewScreen = observer(function WebViewScreen() {
  // Pull in one of our MST stores
  const { casterStore } = useStores()

  const [url, setUrl] = useState("")
  const [canGoBack, setCanGoBack] = useState(false)

  const webView = useRef<WebView>(null)

  // const setGoBack = (navState) => {
  //   setWebView((webView) => ({ ...webView, canGoBack: navState.canGoBack }))
  // }

  // const setWebRef = (view) => {
  //   setWebView((webView) => ({ ...webView, ref: view }))
  // }

  // Pull in navigation via hook
  const navigation = useNavigation()

  useEffect(() => {
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", HandleBackPressed)

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", HandleBackPressed)
      }
    }
  }, [])

  // useEffect(() => {
  //   navigation.addListener("beforeRemove", (e) => {
  //     if (webViewRef.current.goBack()) {
  //       console.log("got previous screen")
  //       return
  //     }
  //     e.preventDefault()
  //     if (!webViewRef.current.goBack()) console.log("no more screens")
  //   })
  // }, [canGoBack])

  const HandleBackPressed = () => {
    if (webView.current) {
      webView.current.goBack()
      return true // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false
  }

  return (
    <CONTAINER>
      <HEADER>
        <TouchableHighlight
          underlayColor="#f7fafc"
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Icon name="arrow-back" fontSize="6xl" fontFamily="MaterialIcons" h="100%" />
        </TouchableHighlight>
        <Input
          placeholder="URL"
          w={"90%"}
          focusBorderColor="blue700"
          defaultValue={casterStore.geturl}
        />
      </HEADER>

      <WEBVIEW_WRAPPER>
        <WebView
          ref={webView}
          source={{ uri: casterStore.geturl }}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
        />
      </WEBVIEW_WRAPPER>
      <FOOTER>
        <Text fontFamily={fontPreset.bold} color="white" fontSize="2xl">
          Searching for links......
        </Text>
      </FOOTER>
    </CONTAINER>
  )
})
