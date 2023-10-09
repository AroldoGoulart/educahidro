import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../colors';
import { type TypographyProps } from './types';

export const fonts = {
  light: 'Inter_300Light',
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  bold: 'Inter_700Bold',
  black: 'Inter_900Black',
};

export const TYPOGRAPHY: TypographyProps = {
  heading1: {
    fontFamily: fonts.bold,
    fontSize: RFValue(96),
    color: colors.neutral[900],
  },
  heading2: {
    fontFamily: fonts.bold,
    fontSize: RFValue(64),
    color: colors.neutral[900],
  },
  heading3: {
    fontFamily: fonts.bold,
    fontSize: RFValue(48),
    color: colors.neutral[900],
  },
  heading4: {
    fontFamily: fonts.bold,
    fontSize: RFValue(40),
    color: colors.neutral[900],
  },
  heading5: {
    fontFamily: fonts.bold,
    fontSize: RFValue(32),
    color: colors.neutral[900],
  },
  heading6: {
    fontFamily: fonts.bold,
    fontSize: RFValue(24),
    color: colors.neutral[900],
  },
  large: {
    fontFamily: fonts.bold,
    fontSize: RFValue(20),
    color: colors.neutral[900],
  },
  base: {
    fontFamily: fonts.bold,
    fontSize: RFValue(16),
    color: colors.neutral[900],
  },
  small: {
    fontFamily: fonts.bold,
    fontSize: RFValue(14),
    color: colors.neutral[900],
  },
  xSmall: {
    fontFamily: fonts.bold,
    fontSize: RFValue(12),
    color: colors.neutral[900],
  },
  heading1Regular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(96),
    color: colors.neutral[900],
  },
  heading2Regular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(64),
    color: colors.neutral[900],
  },
  heading3Regular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(48),
    color: colors.neutral[900],
  },
  heading4Regular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(40),
    color: colors.neutral[900],
  },
  heading5Regular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(32),
    color: colors.neutral[900],
  },
  heading6Regular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(24),
    color: colors.neutral[900],
  },
  largeRegular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(20),
    color: colors.neutral[900],
  },
  baseRegular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(16),
    color: colors.neutral[900],
    lineHeight: 22,
  },
  smallRegular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(14),
    color: colors.neutral[900],
  },
  xSmallRegular: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: RFValue(12),
    color: colors.neutral[900],
  },
};
