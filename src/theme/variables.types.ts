import { lightTheme } from 'theme/variables'

export type TTextColors = keyof typeof lightTheme.color

export interface IBackgroundProps {
  background?: TTextColors
  isDisabled?: boolean
}
export interface IColorProps {
  color?: TTextColors
}
