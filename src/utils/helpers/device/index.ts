import { Dimensions, Platform } from 'react-native';
import { type Theme } from '@react-navigation/native';

export const Screen = Dimensions.get('window');
export const ScreenWidth = Screen.width;
export const ScreenHeight = Screen.height;
export const isIOS = Platform.OS === 'ios';

export type RneFunctionComponent<T> = React.FunctionComponent<
  T & {
    theme?: Theme;
    children?: React.ReactNode | undefined;
  }
>;
