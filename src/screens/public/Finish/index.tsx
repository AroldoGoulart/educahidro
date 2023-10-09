import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FeatherIcons from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Button from '@/components/Button';
import { useQuestion } from '@/contexts/helpModal';
import { colors } from '@/utils/design/colors';
import { SIZES } from '@/utils/design/sizes';
import { TYPOGRAPHY } from '@/utils/design/typography';

import RImgLogo from '../../../assets/educa.png';
import RImg1 from '../../../assets/trophy/01.png';
import RImg2 from '../../../assets/trophy/02.png';
import RImg3 from '../../../assets/trophy/03.png';
import { styles } from './styles';

const RankingData = {
  [1]: {
    labelBig: 'Parabéns!',
    label: 'VOCÊ COMPLETOU SUA MISSÃO!!',
    about: `APRENDEU SOBRE A ÀGUA E GANHOU O TROFEU GOTA DE USO CONSCIENTE DOS RECURSO HIDRICOS`,
    image: RImg1,
    bg: `#FED676`,
  },
  [2]: {
    label: `VOCÊ FOI MUITO BEM, E COMPLETOU A MISSÃO!`,
    about: `VAMOS ESTUDAR UM POUCO MAIS SOBRE RECURSOS HÍDRICOS? PARA ISSO, REINICIE O GAME!!!`,
    image: RImg2,
    bg: `#4AFF72`,
  },
  [3]: {
    label: `INFELIZMENTE VOCÊ NÃO CONSEGUIU COMPLETAR A MISSÃO!`,
    about: `VAMOS ESTUDAR UM POUCO MAIS SOBRE RECURSOS HÍDRICOS? PARA ISSO, REINICIE O GAME!!!`,
    image: RImg3,
    bg: `#FE7C7C`,
  },
};

function FinishScreen() {
  const navigation = useNavigation();
  let { positionAtEnd, reset, percentageCorrect, percentageWrong } =
    useQuestion();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding.horizontalScreen,
        }}
      >
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        ></View>
        <ScrollView
          style={{
            flex: 1,
          }}
        ></ScrollView>

        <Image
          source={RankingData[positionAtEnd].image}
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            resizeMode: 'contain',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            backgroundColor: RankingData[positionAtEnd].bg,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 50,
            borderRadius: 10,
            marginBottom: 20,
            paddingHorizontal: 20,
            paddingBottom: positionAtEnd > 1 ? 20 : 50,
          }}
        >
          {positionAtEnd === 1 && (
            <Text
              style={[
                TYPOGRAPHY.heading6,
                {
                  textAlign: 'center',
                  marginBottom: 10,
                },
              ]}
            >
              {RankingData[positionAtEnd].labelBig}
            </Text>
          )}
          <Text
            style={[
              TYPOGRAPHY.xSmall,
              {
                textAlign: 'center',
              },
            ]}
          >
            {RankingData[positionAtEnd].label}
          </Text>
          <Text
            style={[
              TYPOGRAPHY.small,
              {
                textAlign: 'center',
                marginVertical: 10,
              },
            ]}
          >
            {positionAtEnd > 1 && `VOCÊ OBTEVE ${percentageCorrect}% ERROS`}
            {positionAtEnd === 1 && `VOCÊ OBTEVE ${percentageWrong}% ACERTOS`}
          </Text>

          <Text
            style={[
              TYPOGRAPHY.xSmallRegular,
              {
                fontSize: RFValue(10),
                textAlign: 'center',
              },
            ]}
          >
            {RankingData[positionAtEnd].about}
          </Text>
          {positionAtEnd > 1 && (
            <Image
              source={RImgLogo}
              style={{
                width: 500,
                height: 40,
                alignSelf: 'center',
                resizeMode: 'contain',
                marginTop: 20,
              }}
            />
          )}
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: SIZES.padding.horizontalScreen,
        }}
      >
        <Button
          title="JOGAR NOVAMENTE"
          onPress={() => {
            reset(),
              {
                page: 1,
              };
            navigation.navigate(`Onboarding`);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default FinishScreen;
