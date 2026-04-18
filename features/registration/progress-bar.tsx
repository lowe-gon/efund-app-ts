import React from 'react';
import { Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IProgressBar {
  title: string;
  activeStep: number;
  maxStep: number;
}

export default function ProgressBar({ title, activeStep = 1, maxStep = 6 }: IProgressBar) {
  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = withTiming(activeStep, {
      duration: 500,
    });
  }, [progress, activeStep]);

  const animatedProgressStyle = useAnimatedStyle(() => ({
    width: interpolate(progress.value, [0, 1, 2, 3], [0, 127, 253, 380]),
  }));

  return (
    <View className="gap-1">
      <View className="flex w-full flex-row items-center justify-between">
        <Text className="font-quicksand-bold text-base">{title}</Text>
        <Text className="font-quicksand-medium text-sm">
          {activeStep} step of {maxStep}
        </Text>
      </View>
      <View className="bg-muted relative h-3 w-full overflow-hidden rounded-full">
        <Animated.View style={animatedProgressStyle} className="bg-secondary absolute inset-0" />
      </View>
    </View>
  );
}
