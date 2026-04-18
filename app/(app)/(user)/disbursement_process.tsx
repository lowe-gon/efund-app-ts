import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function DisbursementProcessScreen() {
  return (
    <View className="bg-background flex-1">
      <View className="pt-safe relative px-4">
        {/* Background */}
        <View className="bg-primary absolute top-0 right-0 left-0 h-86 rounded-b-[7rem]"></View>
      </View>
      <View className="gap-3 px-4">
        <Text className="font-quicksand-bold text-center text-lg text-white">
          Disbursement Process
        </Text>

        <View className="gap-5 rounded-3xl border border-gray-100 bg-white p-4 shadow-lg shadow-black/20">
          <View className="flex w-full flex-col items-center justify-center">
            <View className="h-36 w-36">
              <Image
                source={require('@/assets/images/dog-process.png')}
                style={{
                  flex: 1,
                }}
                contentFit="cover"
                alt="DogProcess"
              />
            </View>

            <Text className="font-quicksand-bold text-center text-lg">
              Loan Approve! {'\n'} It usually takes no more 5 minutes
            </Text>
          </View>

          <View className="bg-muted gap-4 rounded-2xl p-6">
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="font-quicksand-semibold text-foreground text-sm">Loan Amount</Text>
              <View className="flex flex-row items-center gap-1">
                <Text className="font-quicksand-bold text-base">₱ 25,000</Text>
                <MaterialCommunityIcons name="hand-coin-outline" size={20} color={'#002bae'} />
              </View>
            </View>
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="font-quicksand-semibold text-foreground text-sm">
                Amount to be Credited
              </Text>
              <View className="flex flex-row items-center gap-1">
                <Text className="font-quicksand-bold text-base">₱ 4,324</Text>
                <MaterialCommunityIcons name="hand-coin-outline" size={20} color={'#002bae'} />
              </View>
            </View>
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="font-quicksand-semibold text-foreground text-sm">
                Repayment Amount
              </Text>
              <View className="flex flex-row items-center gap-1">
                <Text className="font-quicksand-bold text-base">₱ 4,324</Text>
                <MaterialCommunityIcons name="hand-coin-outline" size={20} color={'#002bae'} />
              </View>
            </View>
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="font-quicksand-semibold text-sm">Repayment Date</Text>
              <View className="flex flex-row items-center gap-1">
                <Text className="font-quicksand-bold text-base">20-06-2026</Text>
                <Feather name="calendar" size={20} color={'#002bae'} />
              </View>
            </View>
          </View>

          <Text className="text-foreground font-quicksand-medium text-xs">
            Wait please. As soon as the money is transferred and the contract is activated, we will
            send you a notification about this. Usually money is transferred instantly, but in rare
            cases there are delays.
          </Text>

          <View className="flex flex-row items-center justify-center">
            <Pressable className="">
              <Text className="font-quicksand-semibold text-primary text-sm underline">
                Didn&apos;t receive money?
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className="flex-1 justify-end gap-3 px-4 pb-6">
        <Pressable
          onPress={() => router.replace('/(app)/(user)/(tabs)')}
          className="bg-secondary flex w-full flex-row items-center justify-center rounded-full py-4">
          <Text className="font-quicksand-bold text-sm text-black">CONTINUE</Text>
        </Pressable>
      </View>
    </View>
  );
}
