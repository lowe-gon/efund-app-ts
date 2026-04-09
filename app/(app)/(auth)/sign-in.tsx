import SignInForm from '@/features/signin/components/signin-form';
import React from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

export default function SignInScreen() {
  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = withDelay(500, withTiming(1, { duration: 1000 }));
  }, [progress]);

  const animatedContentStyle = useAnimatedStyle(() => ({
    flex: interpolate(progress.value, [0, 1], [0, 1], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [500, 0]),
      },
    ],
  }));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-green-500">
        {/* Landing */}
        <View className="flex-5 items-center justify-center">
          <Text className="font-quicksand-bold text-5xl text-white">eFund</Text>
        </View>
        {/* Content */}
        <Animated.View
          style={animatedContentStyle}
          className="bg-background flex-col gap-4 rounded-t-2xl px-4 pt-4">
          <Text className="font-quicksand-bold text-lg">Login with your account</Text>
          <SignInForm />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
