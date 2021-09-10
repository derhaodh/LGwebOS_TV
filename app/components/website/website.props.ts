import { NavigationProp } from "@react-navigation/native"
import { StyleProp, ViewStyle } from "react-native"

export interface WebsiteProps {
  id: number
  name: string
  image: string
  style?: StyleProp<ViewStyle>
  isBookmarked: boolean
}
