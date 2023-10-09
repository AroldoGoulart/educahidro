import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Image as RNImage,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { Image } from 'expo-image';
import FeatherIcons from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Button from '@/components/Button';
import { useIsFirstTime } from '@/hooks/useIsFirstTime';
import { colors } from '@/utils/design/colors';
import { SIZES } from '@/utils/design/sizes';

import CharImg from '../../../assets/character.png';
import CharImg2 from '../../../assets/character2.png';
import { DataOnboarding } from './constants';
import { styles } from './styles';

function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding.horizontalScreen,
          paddingTop: 60,
        }}
      >
        <Image
          source={CharImg2}
          style={{
            width: `100%`,
            height: 300,
          }}
          resizeMode="contain"
        />
        <Image
          source={CharImg}
          style={{
            width: `100%`,
            height: 300,
          }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          paddingHorizontal: SIZES.padding.horizontalScreen,
        }}
      >
        <Button
          title="Iniciar"
          onPress={() =>
            navigation.navigate('InitPage', {
              page: 1,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
