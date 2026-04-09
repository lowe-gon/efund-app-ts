import FloatingLabelInput from '@/components/floating-label-input';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Countries from './countries';

export default function PhoneInput() {
  return (
    <View className="w-full flex-col gap-3">
      <View className="flex-row items-center gap-2">
        <Countries />
        <View className="flex-1">
          <FloatingLabelInput label="Phone number" placeholder="123456789" />
        </View>
      </View>
      <Pressable className="w-full flex-row items-center justify-center rounded-xl bg-green-500 py-4">
        <Text className="font-quicksand-medium text-base text-white">Continue</Text>
      </Pressable>
    </View>
  );
}
