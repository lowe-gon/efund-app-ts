import { cn } from '@/libs/cn';
import React from 'react';
import {
  TextInput,
  type BlurEvent,
  type FocusEvent,
  type TextInputProps,
  type ViewProps,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IFloatingLabelInputProps extends TextInputProps {
  classNames?: ViewProps['className'];
  label: string;
}

export default function FloatingLabelInput({
  label,
  classNames,
  className,
  placeholder,
  onChangeText,
  onBlur,
  onFocus,
  ...props
}: IFloatingLabelInputProps) {
  const [value, setValue] = React.useState('');
  const progress = useSharedValue(value ? 1 : 0);
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  const onChangeTextHandler = (text: string) => {
    setValue(text);
    onChangeText?.(text);
  };

  const onFocusHandler = (e: FocusEvent) => {
    if (!value) {
      progress.value = withTiming(1, { duration: 300 });
    }
    setIsFocus(true);
    onFocus?.(e);
  };
  const onBlurHandler = (e: BlurEvent) => {
    if (!value) {
      progress.value = withTiming(0, { duration: 300 });
    }
    setIsFocus(false);
    onBlur?.(e);
  };

  const animatedContainerStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(progress.value, [0, 1], ['#d1d5dc', '#6a7282']),
  }));

  const animatedLabelStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [0, -12], Extrapolation.CLAMP),
      },
    ],
    fontSize: interpolate(progress.value, [0, 1], [14, 12]),
    color: interpolateColor(progress.value, [0, 1], ['#99a1af', '#000000']),
  }));

  return (
    <>
      <Animated.View
        style={animatedContainerStyle}
        className={cn('h-14 w-full rounded-xl border px-4', classNames)}>
        {/* Label */}
        <Animated.Text
          style={animatedLabelStyle}
          className="font-quicksand-medium absolute top-4 left-4">
          {label}
        </Animated.Text>

        <TextInput
          className={cn('font-quicksand-medium flex-1 pt-2 text-sm', className)}
          onChangeText={onChangeTextHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          placeholder={isFocus ? placeholder : ''}
          {...props}
        />
      </Animated.View>
    </>
  );
}
