import React from 'react';
import { Text, View } from 'react-native';
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
    progress.value = withDelay(500, withTiming(1, { duration: 500 }));
  }, [progress]);

  const animatedContentStyle = useAnimatedStyle(() => ({
    flex: interpolate(progress.value, [0, 1], [0, 1], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [80, 0]),
      },
    ],
  }));

  return (
    <View className="flex-1 bg-green-500">
      {/* Landing */}
      <View className="flex-1 items-center justify-center">
        <Text className="font-quicksand-bold text-5xl text-white">eFund</Text>
      </View>
      {/* Content */}
      <Animated.View
        style={animatedContentStyle}
        className="flex-col gap-4 rounded-t-2xl bg-white px-4 pt-4">
        <Text className="font-quicksand-bold text-lg">Login with your account</Text>
        <View></View>
      </Animated.View>
    </View>
  );
}
