import { StyleSheet } from 'react-native';

import { colors } from '@/utils/design/colors';
import { SIZES } from '@/utils/design/sizes';
import { TYPOGRAPHY } from '@/utils/design/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#E3E3E3`,
    paddingHorizontal: SIZES.padding.horizontal,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  logoImage: {
    width: 140,
    height: 50,
  },
  flatList: {
    marginTop: 25,
  },
  slideImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...TYPOGRAPHY.large,
    marginTop: 28,
  },
  description: {
    ...TYPOGRAPHY.baseRegular,
    lineHeight: 22,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 55,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding.horizontal,
  },
  imagesContainer: {
    paddingHorizontal: SIZES.padding.horizontal,
    paddingVertical: SIZES.padding.vertical,
  },
  skipButtonContainer: {
    marginTop: 15,
  },
});
