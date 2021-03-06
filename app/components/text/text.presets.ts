import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
export const fontPreset = {
  primary: typography.primary,

  medium: typography.medium,

  bold: typography.bold,

  extraBold: typography.extraBold,
}

const BASE: TextStyle = {
  fontFamily: fontPreset.primary,
  color: color.text,
  fontSize: 15,
}

const MEDIUM: TextStyle = {
  fontFamily: fontPreset.medium,
  color: color.text,
  fontSize: 20,
}

const BOLD: TextStyle = {
  fontFamily: fontPreset.bold,
  color: color.text,
  fontSize: 20,
}

const EXTRABOLD: TextStyle = {
  fontFamily: fontPreset.extraBold,
  color: color.text,
  fontSize: 20,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  medium: { ...MEDIUM } as TextStyle,

  bold: { ...BOLD } as TextStyle,

  /**
   * A bold version of the default text.
   */
  EXTRABOLD: { ...EXTRABOLD } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 24, fontWeight: "bold" } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
