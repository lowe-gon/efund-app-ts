import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetItemText,
} from '@/components/ui/actionsheet';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function OAuth() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  return (
    <>
      <View className="gap-3">
        <View className="w-full">
          <Pressable className="relative flex h-14 flex-row items-center justify-center rounded-xl bg-gray-300">
            <View className="absolute left-8">
              <AntDesign name="apple" size={20} />
            </View>
            <Text className="font-quicksand-medium text-base">Continue with Apple</Text>
          </Pressable>
        </View>
        <View className="w-full">
          <Pressable className="relative flex h-14 flex-row items-center justify-center rounded-xl bg-gray-300">
            <View className="absolute left-8">
              <AntDesign name="google" size={20} />
            </View>
            <Text className="font-quicksand-medium text-base">Continue with Google</Text>
          </Pressable>
        </View>
        <View className="w-full">
          <Pressable
            onPress={() => setShowActionsheet(true)}
            className="flex h-14 flex-row items-center justify-center rounded-xl bg-gray-300">
            <Text className="font-quicksand-medium text-base">Others</Text>
          </Pressable>
        </View>
      </View>

      <Actionsheet isOpen={showActionsheet} onClose={() => setShowActionsheet(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent className="gap-3">
          <View className="flex w-full flex-row items-center justify-between py-4">
            <ActionsheetItemText className="font-quicksand-bold text-xl">
              Login with your account
            </ActionsheetItemText>
            <Pressable
              onPress={() => setShowActionsheet(false)}
              className="rounded-full bg-slate-400 p-2">
              <AntDesign name="close" size={16} />
            </Pressable>
          </View>
          <Pressable className="flex h-14 w-full flex-row items-center justify-center rounded-xl bg-gray-300">
            <View className="absolute left-8">
              <AntDesign name="apple" size={20} />
            </View>
            <ActionsheetItemText className="font-quicksand-medium text-base">
              Continue with Apple
            </ActionsheetItemText>
          </Pressable>
          <Pressable className="flex h-14 w-full flex-row items-center justify-center rounded-xl bg-gray-300">
            <View className="absolute left-8">
              <AntDesign name="google" size={20} />
            </View>
            <ActionsheetItemText className="font-quicksand-medium text-base">
              Continue with Google
            </ActionsheetItemText>
          </Pressable>
          <Pressable className="flex h-14 w-full flex-row items-center justify-center rounded-xl bg-gray-300">
            <View className="absolute left-8">
              <AntDesign name="mail" size={20} />
            </View>
            <ActionsheetItemText className="font-quicksand-medium text-base">
              Continue with Email
            </ActionsheetItemText>
          </Pressable>
          <Pressable className="flex h-14 w-full flex-row items-center justify-center rounded-xl bg-gray-300">
            <ActionsheetItemText className="font-quicksand-medium text-base">
              Continue as Guest
            </ActionsheetItemText>
          </Pressable>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
