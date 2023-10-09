import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import FeatherIcons from '@expo/vector-icons/Feather';

import MessageQuestionSquareIcon from '@/assets/Icons/message-question-square.svg';
import { type FeatherIconsType } from '@/types/icons';
import { colors } from '@/utils/design/colors';
import { TYPOGRAPHY } from '@/utils/design/typography';

import { styles } from './styles';

export const HeaderBackgroundNavigation = () => {
  return {
    title: ``,
    headerBackground: () => {
      return <View style={styles.headerBackground} />;
    },
  };
};

export const HeaderBackView = () => (
  <View style={styles.headerBackView}>
    <FeatherIcons name="chevron-left" size={24} color={colors.neutral[100]} />
  </View>
);

export const HeadeStyle = () => {
  return {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: colors.neutral[100],
  };
};

export const TitleStyle = () => {
  return {
    ...TYPOGRAPHY.base,
    color: colors.neutral[900],
  };
};

type HeaderRightPropsType = {
  onPress: () => void;
  icon?: FeatherIconsType;
  name?: string;
  support?: boolean;
};

export const HeaderRight = (props: HeaderRightPropsType): React.ReactNode => {
  const { onPress, icon, support } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.headerRight}>
      {support ? (
        <Image style={styles.image} source={MessageQuestionSquareIcon} />
      ) : (
        <FeatherIcons name={icon} size={22} color={colors.brend.orange[500]} />
      )}
      <Text style={styles.headerRightText}>
        {support ? 'Ajuda' : props.name}
      </Text>
    </TouchableOpacity>
  );
};
