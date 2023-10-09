import { type StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Onboarding: undefined;
    InitPage?: {
      page: 1 | 2 | 3;
    };
    QuestionView: undefined;
    FinishScreen: undefined;
    About?: {
      text: string;
    }
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

export type RouteProp<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
