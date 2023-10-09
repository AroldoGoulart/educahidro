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
import { RouteProp } from '@/navigation/types';
import { colors } from '@/utils/design/colors';
import { SIZES } from '@/utils/design/sizes';
import { TYPOGRAPHY } from '@/utils/design/typography';

import { DataOnboarding } from './constants';
import { styles } from './styles';

export type AboutProps = RouteProp<`About`>;

const PageStep = {
  [1]: {
    image: ``,
    text: `Neste jogo a sua missão é aprender um pouco mais sobre os recursos hídricos e seu uso consciente, de uma forma bem divertida. vamos lá?`,
    subText: `Nesta fase você deve encontrar formas de diminuir o gasto de água, fazendo um uso consciente deste recurso hídrico!`,
    knowMore: ``,
  },
  [2]: {
    image: ``,
    text: `A água é um recurso muito precioso e essencial para a vida, mas infelizmente, nem sempre temos água limpa e suficiente para todos. por isso, é importante economizar, reutilizar, reaproveitar a água sempre que possível.`,
    subText: `Sua missão continua... nesta fase vamos aprender sobre uma forma de uso consciente que é o reúso e o reaproveitamento do recurso hídrico, ou seja, usar a mesma água mais de uma vez. vamos lá?`,
    knowMore: ``,
  },
  [3]: {
    image: ``,
    text: `Sua missão está quase concluída... nesta fase vamos aprender sobre qualidade da água e poluição das águas. vamos lá?`,
    subText: `Infelizmente, muitos rios estão poluídos e isso é muito prejudicial para a natureza e para os seres vivos que dependem da água. pois, para que a água seja segura para o consumo humano e para a manutenção do meio ambiente, é necessário que ela esteja em boas condições de qualidade.`,
    knowMore: `A qualidade da água refere-se à sua potabilidade, ou seja, à ausência de substâncias que possam ser prejudiciais à saúde das pessoas e dos animais que a utilizam. nesse sentido, é importante entendermos como podemos preservar a qualidade da água e como cuidar desse recurso tão precioso para todos nós.
a poluição das águas dos rios acontece quando produtos químicos, lixo, esgoto e outros materiais são jogados diretamente nos rios. isso pode prejudicar a qualidade da água e afetar a vida dos animais e das plantas que vivem no rio. por isso, é muito importante cuidar da água e evitar jogar lixo ou produtos químicos nos rios.`,
  },
};

function About(props: AboutProps) {
  const navigation = useNavigation();
  const { route } = props;
  const { params } = route || {};
  const { text } = params || {};

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding.horizontalScreen,
        }}
      >
        <FeatherIcons
          name="arrow-left"
          size={30}
          color={colors.neutral[`900`]}
          onPress={() => navigation.goBack()}
        />
        <Image
          source={require('../../../assets/logo2.png')}
          style={{
            width: 120,
            height: 35,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding.horizontalScreen,
          marginTop: 15,
        }}
      >
        <Text
          style={[
            TYPOGRAPHY.heading6,
            {
              marginBottom: 15,
            },
          ]}
        >
          Saiba mais
        </Text>
        <Text style={[TYPOGRAPHY.smallRegular]}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}

export default About;
