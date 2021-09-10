import * as React from "react"
import {
  StyleProp,
  TextStyle,
  TouchableNativeFeedbackBase,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { flatten } from "ramda"
import { Button, Div, Icon, Modal, Text } from "react-native-magnus"
import { NetworkInfo } from "react-native-network-info"
import { useStores } from "../../models"
import { fontPreset } from "../text/text.presets"
import { IconProps } from "react-native-vector-icons/Icon"

export interface CastButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  isVisible: boolean
  setModalVisible: (boolean) => void
  isConnected: boolean
  iconSize: string
  style?: StyleProp<ViewStyle>
}

const buttonStyle: ViewStyle = {
  width: 24,
  height: 24,
  backgroundColor: "transparent",
}

/**
 * Describe your component here
 */
export const CastButton: React.FC<CastButtonProps> = observer(function CastButton(
  props: CastButtonProps,
) {
  const { iconSize, setModalVisible, isConnected } = props

  return (
    <Div>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Div>
          <Icon
            name={isConnected ? "television-ambient-light" : "television-off"}
            fontFamily="MaterialCommunityIcons"
            fontSize={iconSize}
            color="white"
          />
        </Div>
      </TouchableOpacity>
    </Div>
  )
})
