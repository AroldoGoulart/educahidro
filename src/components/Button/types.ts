import { type Pressable } from 'react-native';

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof Pressable> {
  disabled?: boolean;
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}
