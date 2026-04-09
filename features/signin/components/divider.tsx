import React from 'react';
import { Text, View } from 'react-native';

export default function Divider() {
  return (
    <View className="relative flex flex-row items-center justify-center">
      {/* Line */}
      <View className="absolute top-2.5 right-0 left-0 h-px bg-gray-400" />

      <Text className="font-quicksand-medium bg-white px-3 text-gray-400">or</Text>
    </View>
  );
}
