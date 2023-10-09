import { Dimensions, PixelRatio, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const getPixelSize = (pixels: number) => {
  return PixelRatio.getPixelSizeForLayoutSize(pixels);
};

const isAndroid = Platform.OS === 'android';
const isIphone = Platform.OS === 'ios';
const isIphoneNotch = isIphoneX();

export { width, height, isAndroid, isIphone, isIphoneNotch };
