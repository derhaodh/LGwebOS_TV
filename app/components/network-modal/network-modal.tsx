import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { flatten } from "ramda"
import { Modal, Button, Text, Icon, Div } from "react-native-magnus"
import { fontPreset } from "../text/text.presets"
import { SafeAreaView } from "react-native-safe-area-context"

const CONTAINER: ViewStyle = {
  flex: 1,
  height: "100%",
  width: "100%",
}

export interface NetworkModalProps {
  setModalVisible: (arg: boolean) => void
  isModalVisible: boolean
  ipAddress: string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const NetworkModal = observer(function NetworkModal(props: NetworkModalProps) {
  const { ipAddress, isModalVisible, setModalVisible, style } = props
  const styles = flatten([CONTAINER, style])

  return (
    <SafeAreaView style={styles}>
      <Modal isVisible={isModalVisible} h="60%" onBackdropPress={() => setModalVisible(false)}>
        <Div flexDir="column" p={20}>
          <Div>
            <Button
              alignSelf="flex-end"
              bg="gray400"
              rounded="circle"
              onPress={() => {
                setModalVisible(false)
              }}
            >
              <Icon color="black" name="close" />
            </Button>
          </Div>

          <Div alignItems="center" top={20}>
            <Text fontSize="3xl" fontFamily={fontPreset.medium}>
              Your IP address is :
            </Text>
            <Text
              my={15}
              p={10}
              textAlign="center"
              fontSize="3xl"
              rounded={20}
              borderColor="red400"
              borderWidth={7}
              fontFamily={fontPreset.extraBold}
            >
              {ipAddress}
            </Text>
            <Text my={40} fontSize="2xl" fontFamily={fontPreset.medium} textAlign="justify">
              Please input the IP address to the receiver side
            </Text>
          </Div>
        </Div>
      </Modal>
    </SafeAreaView>
  )
})
