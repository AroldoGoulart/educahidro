import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
  type GestureResponderEvent,
  type NativeSyntheticEvent,
  type TargetedEvent,
} from 'react-native';

import { styles } from './styles';
import { type ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const {
    disabled = false,
    title = 'Chat do time',
    leftIcon,
    variant = 'primary',
    rightIcon,
    isLoading = false,
    ...rest
  } = props;
  const buttonRef = useRef<Pressable | null>(null); // Use RefObject<Pressable>
  const [isPressed, setPressed] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const handlePressIn = (event: GestureResponderEvent) => {
    setPressed(true);
    rest.onPressIn && rest.onPressIn(event);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    setPressed(false);
    rest.onPressOut && rest.onPressOut(event);
  };

  const handleFocus = (e: NativeSyntheticEvent<TargetedEvent>) => {
    setFocused(true);
    rest.onFocus && rest.onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TargetedEvent>) => {
    setFocused(false);
    rest.onBlur && rest.onBlur(e);
  };

  const getStatusStyle = () => {
    if (variant === `primary`) {
      if (disabled) {
        return styles.buttonDisabled;
      } else if (isPressed) {
        return styles.buttonPressed;
      } else if (isFocused) {
        return styles.buttonFocus;
      } else {
        return styles.buttonDefault;
      }
    }
    if (variant === `secondary`) {
      if (disabled) {
        return styles.buttonOutlineDisabled;
      } else if (isPressed) {
        return styles.buttonOutlinePressed;
      } else if (isFocused) {
        return styles.buttonOutlineFocus;
      } else {
        return styles.buttonOutline;
      }
    }
  };

  const getTextStyle = () => {
    if (variant === `primary`) {
      if (disabled) {
        return styles.textInactive;
      }
      return styles.text;
    }
    if (variant === `secondary`) {
      if (disabled) {
        return styles.textOutlineInactive;
      } else if (isPressed) {
        return styles.textOutlinePressed;
      } else if (isFocused) {
        return styles.textOutlineFocus;
      } else {
        return styles.textOutline;
      }
    }
  };

  return (
    <Pressable
      {...rest}
      ref={buttonRef}
      style={[styles.button, getStatusStyle()]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled || isLoading} // Disable the button when isLoading is true
      accessible={!disabled} // Make the button accessible when not disabled
      accessibilityRole="button" // Declare the role as a button
      accessibilityLabel={title} // Provide a label for the button (read by screen readers)
      sentry-label="Button"
      accessibilityState={{
        disabled: disabled || isLoading,
        selected: isPressed,
      }} // Provide the state information (disabled and pressed)
    >
      {isLoading ? (
        <ActivityIndicator
          color={variant === `primary` ? `#fff` : `#000`}
          size="small"
        /> // Show loading indicator if isLoading is true
      ) : (
        <>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

          <Text sentry-label={`Button-text`} style={getTextStyle()}>
            {title}
          </Text>
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </>
      )}
    </Pressable>
  );
};

export default (Button)