import { StyleSheet } from 'react-native';

import { colors } from '@/utils/design/colors';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 11,
  },
  buttonDefault: {
    backgroundColor: colors.brend.green['500'],
  },
  buttonFocus: {
    backgroundColor: colors.brend.green['500'],
    borderWidth: 2,
    // 00ffbc in rgb
    borderColor: `rgba(0, 255, 188, 0.3)`
  },
  buttonPressed: {
    backgroundColor: `rgba(0, 255, 200, 0.5)`,
  },
  buttonDisabled: {
    backgroundColor: colors.brend.green[100],
  },
  buttonOutline: {
    backgroundColor: colors.brend.main['500'],
    borderWidth: 2,
    borderColor: colors.brend.main['500'],
    justifyContent: `flex-start`
  },
  buttonOutlineFocus: {
    backgroundColor: colors.neutral['900'],
    borderWidth: 2,
    borderColor: colors.brend.main['500']
  },
  buttonOutlinePressed: {
    borderWidth: 2,
    borderColor: colors.neutral['100'],
    backgroundColor: colors.brend.main['900'],
    justifyContent: `flex-start`
  },
  buttonOutlineDisabled: {
    backgroundColor: colors.neutral['100'],
    borderWidth: 2,
    borderColor: colors.brend.green['100'],
    opacity: 0.5,
  },
  text: {
    fontFamily: 'Intert_700Bold',
    fontSize: 22,
    lineHeight: 22,
    color: colors.neutral['900'],
  },
  textInactive: {
    fontFamily: 'Intert_700Bold',
    fontSize: 16,
    lineHeight: 22,
    color: colors.neutral['900'],
  },
  textOutline: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    lineHeight: 22,
    color: colors.neutral['900'],
  },
  textOutlineHover: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    lineHeight: 22,
    color: colors.brend.green['700'],
  },
  textOutlinePressed: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    lineHeight: 22,
    color: colors.brend.green['900'],
  },
  textOutlineInactive: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    lineHeight: 22,
    color: colors.brend.green['100'],
  },
  textOutlineFocus: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    lineHeight: 22,
    color: colors.neutral['500'],
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});
