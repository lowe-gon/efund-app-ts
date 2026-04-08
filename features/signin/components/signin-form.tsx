import React from 'react';
import { View } from 'react-native';
import PhoneInput from './phone-input';

export default function SignInForm() {
  return (
    <>
      <View className="flex flex-col gap-3">
        <PhoneInput />
      </View>
    </>
  );
}
