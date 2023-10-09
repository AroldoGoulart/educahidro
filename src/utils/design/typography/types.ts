import type { TextStyle } from 'react-native';

const TYPOGRAPHY = {
  heading1: {} as TextStyle,
  heading2: {} as TextStyle,
  heading3: {} as TextStyle,
  heading4: {} as TextStyle,
  heading5: {} as TextStyle,
  heading6: {} as TextStyle,
  large: {} as TextStyle,
  base: {} as TextStyle,
  small: {} as TextStyle,
  xSmall: {} as TextStyle,
  heading1Regular: {} as TextStyle,
  heading2Regular: {} as TextStyle,
  heading3Regular: {} as TextStyle,
  heading4Regular: {} as TextStyle,
  heading5Regular: {} as TextStyle,
  heading6Regular: {} as TextStyle,
  largeRegular: {} as TextStyle,
  baseRegular: {} as TextStyle,
  smallRegular: {} as TextStyle,
  xSmallRegular: {} as TextStyle,
};

type TypographyKey = keyof typeof TYPOGRAPHY;
export type TypographyProps = {
  [key in TypographyKey]: TextStyle;
};
