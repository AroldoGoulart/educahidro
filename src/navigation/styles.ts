import { StyleSheet } from 'react-native';

import { colors } from '@/utils/design/colors';
import { TYPOGRAPHY } from '@/utils/design/typography';

export const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: colors.brend.sand[100],
  },
  headerBackView: {
    backgroundColor: colors.brend.orange[500],
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 5,
  },
  headerRight: {
    marginRight: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: 5,
  },
  headerRightText: {
    ...TYPOGRAPHY.base,
    color: colors.brend.orange[500],
  },
  title: {
    ...TYPOGRAPHY.base,
    color: colors.neutral[900],
  },
  image: {
    width: 22,
    height: 22,
  },
});
