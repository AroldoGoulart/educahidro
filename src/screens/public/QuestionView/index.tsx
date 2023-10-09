import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Image as RNImage,
  SafeAreaView,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons'; 
import { CommonActions, useNavigation } from '@react-navigation/native';

import Button from '@/components/Button';
import { useQuestion } from '@/contexts/helpModal';
import { QuestionsOriginal } from '@/contexts/helpModal/constants';
import { colors } from '@/utils/design/colors';
import { SIZES } from '@/utils/design/sizes';
import { TYPOGRAPHY } from '@/utils/design/typography';
import { width } from '@/utils/helpers/dimensions';

import { styles } from './styles';

function QuestionViewScreen() {
  const navigation = useNavigation();
  const { questionIndex, chooseOption, countIsWrong } = useQuestion();

  const currentQuestion = useMemo(() => {
    const current = QuestionsOriginal[questionIndex];
    if (!current) {
      return QuestionsOriginal[0];
    }
    return current;
  }, [questionIndex]);

  useEffect(() => {
    if (countIsWrong >= 7) {
      const FinishAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'Finish' }],
      });
      navigation.dispatch(FinishAction);
    }
    if (questionIndex >= QuestionsOriginal.length) {
      const FinishAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'Finish' }],
      });
      navigation.dispatch(FinishAction);
    }
  }, [countIsWrong, questionIndex]);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding.horizontalScreen,
          marginBottom: 5,
        }}
      >
        <Entypo name="menu" size={30} color={colors.neutral[`900`]} />
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
        >
          <Image
            source={currentQuestion?.imagem}
            style={{
              flex: 1,
              width: width,
              height:
                questionIndex < 3
                  ? 120
                  : questionIndex === 8 || questionIndex === 9
                  ? 300
                  : 200,
              resizeMode: [8, 9].includes(questionIndex) ? 'contain' : 'cover',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <Text style={[TYPOGRAPHY.small]}>
            {currentQuestion?.question}
            {!!currentQuestion?.knowMore && (
              <Text
                onPress={() =>
                  navigation.navigate(`About`, {
                    text: currentQuestion?.knowMore,
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
        </ScrollView>
        {!!currentQuestion?.options &&
          currentQuestion?.options.map((item, index) => (
            <View
              key={item.text}
              style={{
                marginTop: 15,
              }}
            >
              <Button
                title={`${
                  index === 0
                    ? `A)`
                    : index === 1
                    ? `B)`
                    : index === 2
                    ? `C)`
                    : `D)`
                } ${item.text}`}
                variant={`secondary`}
                onPress={() => {
                  const nextIndex = questionIndex + 1;
                  const nextWrong = countIsWrong + 1;
                  if (nextIndex == 9) {
                    if (!item.isCorrect) {
                      if (nextWrong >= 7) {
                        chooseOption(item);
                        const FinishAction = CommonActions.reset({
                          index: 0,
                          routes: [{ name: 'Finish' }],
                        });
                        navigation.dispatch(FinishAction);
                        return;
                      }
                    }
                    navigation.navigate(`InitPage`, {
                      page: 2,
                    });
                  }
                  if (nextIndex === 13) {
                    if (!item.isCorrect) {
                      if (nextWrong >= 7) {
                        chooseOption(item);
                        const FinishAction = CommonActions.reset({
                          index: 0,
                          routes: [{ name: 'Finish' }],
                        });
                        navigation.dispatch(FinishAction);
                        return;
                      }
                    }
                    navigation.navigate(`InitPage`, {
                      page: 3,
                    });
                  }
                  chooseOption(item);

                  if (nextIndex === 17) {
                    const FinishAction = CommonActions.reset({
                      index: 0,
                      routes: [{ name: 'Finish' }],
                    });
                    navigation.dispatch(FinishAction);
                  }
                }}
              />
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
}

export default QuestionViewScreen;
