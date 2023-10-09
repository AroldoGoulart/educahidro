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
import { RouteProp } from '@/navigation/types';
import { colors } from '@/utils/design/colors';
import { SIZES } from '@/utils/design/sizes';
import { TYPOGRAPHY } from '@/utils/design/typography';

import Img2 from '../../../assets/phases/01.png';
import Img1 from '../../../assets/phases/02.png';
import { styles } from './styles';

export type InitPageScreenProps = RouteProp<`InitPage`>;

const PageStep = {
  [1]: {
    image: Img2,
    welcome: `Olá, seja bem-vindo(a) primeira fase!`,
    text: `Neste jogo a sua missão é aprender um pouco mais sobre os recursos hídricos e seu uso consciente, de uma forma bem divertida. vamos lá?`,
    subText: `Nesta fase você deve encontrar formas de diminuir o gasto de água, fazendo um uso consciente deste recurso hídrico!`,
    knowMore: ``,
  },
  [2]: {
    image: Img2,
    welcome: `Olá, seja bem-vindo(a) segunda fase!`,
    text: `A água é um recurso muito precioso e essencial para a vida, mas infelizmente, nem sempre temos água limpa e suficiente para todos. por isso, é importante economizar, reutilizar, reaproveitar a água sempre que possível.`,
    subText: `Sua missão continua... nesta fase vamos aprender sobre uma forma de uso consciente que é o reúso e o reaproveitamento do recurso hídrico, ou seja, usar a mesma água mais de uma vez. vamos lá?`,
    knowMore: ``,
  },
  [3]: {
    image: Img1,
    welcome: `Olá, seja bem-vindo(a) terceira fase!`,
    text: `Sua missão está quase concluída... nesta fase vamos aprender sobre qualidade da água e poluição das águas. vamos lá?`,
    subText: `Infelizmente, muitos rios estão poluídos e isso é muito prejudicial para a natureza e para os seres vivos que dependem da água. pois, para que a água seja segura para o consumo humano e para a manutenção do meio ambiente, é necessário que ela esteja em boas condições de qualidade.`,
    knowMore: `A qualidade da água refere-se à sua potabilidade, ou seja, à ausência de substâncias que possam ser prejudiciais à saúde das pessoas e dos animais que a utilizam. nesse sentido, é importante entendermos como podemos preservar a qualidade da água e como cuidar desse recurso tão precioso para todos nós.
a poluição das águas dos rios acontece quando produtos químicos, lixo, esgoto e outros materiais são jogados diretamente nos rios. isso pode prejudicar a qualidade da água e afetar a vida dos animais e das plantas que vivem no rio. por isso, é muito importante cuidar da água e evitar jogar lixo ou produtos químicos nos rios.`,
  },
};

function InitPageScreen(props: InitPageScreenProps) {
  const navigation = useNavigation();
  const { route } = props;
  const { params } = route || {};
  const { page = 1 } = params || {};

  const Data = useMemo(() => {
    return PageStep[page];
  }, [page]);

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
        <FeatherIcons name="menu" size={30} color={colors.neutral[`900`]} />
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
        }}
      >
        <Text
          style={[
            TYPOGRAPHY.base,
            { color: colors.neutral[900], marginTop: 10, textAlign: `center` },
          ]}
        >
          {Data?.welcome}
        </Text>
        <Image
          source={Data?.image}
          style={{
            width: `100%`,
            height: 300,
          }}
          resizeMode="contain"
        />
        <Text style={[TYPOGRAPHY.smallRegular]}>{Data?.text}</Text>

        <Text style={[TYPOGRAPHY.smallRegular]}>
          {Data?.subText}
          {!!Data?.knowMore && (
            <Text
              onPress={() =>
                navigation.navigate(`About`, {
                  text: Data?.knowMore,
                })
              }
              style={[
                TYPOGRAPHY.small,
                {
                  color: `#0EA3E7`,
                },
              ]}
            >
              {`  `} Saiba mais {`>>>`}
            </Text>
          )}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: SIZES.padding.horizontalScreen,
        }}
      >
        <Button
          title="Continuar"
          onPress={() => navigation.navigate(`QuestionView`)}
        />
      </View>
    </SafeAreaView>
  );
}

export default InitPageScreen;
