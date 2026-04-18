import { Pressable } from '@/components/ui/pressable';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { useAssets } from 'expo-asset';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  const [assets] = useAssets([require('@/assets/images/dog-home.png')]);

  return (
    <View className="bg-background flex-1">
      <View className="pt-safe relative px-4">
        {/* Background */}
        <View className="bg-primary absolute top-0 right-0 left-0 h-86 rounded-b-[7rem]"></View>
        {/* Content */}
        <View className="w-full flex-col gap-4">
          {/* Application Name */}
          <Text className="font-quicksand-bold text-center text-2xl text-white">eFund</Text>

          {/* Welcome Text */}
          <View className="flex w-full flex-row items-center gap-5">
            <View className="h-20 w-20">
              {assets ? (
                <Image
                  source={assets[0]!}
                  alt="DogHome"
                  style={{
                    flex: 1,
                  }}
                  contentFit="cover"
                />
              ) : null}
            </View>
            <View className="flex-1 rounded-tr-3xl rounded-br-3xl rounded-bl-4xl bg-white p-4">
              <Text className="font-quicksand-bold text-base">Hi, Jack!</Text>
              <Text className="font-quicksand-medium text-sm">
                I&apos;ve got something special for you!
              </Text>
            </View>
          </View>

          {/* Loan Card */}
          <View className="relative mb-12">
            <View className="z-50 rounded-3xl bg-white p-4 shadow-md shadow-gray-300">
              <View className="flex flex-col items-center justify-center gap-2">
                <View className="flex flex-row items-center gap-1">
                  <Text className="font-quicksand-medium text-base">Get line of credit up to</Text>
                  <Feather name="trending-up" size={20} color="#002bae" />
                </View>
                <Text className="font-quicksand-bold text-4xl">
                  <Text className="text-secondary">₱</Text> 15,000
                </Text>
                <Link href="/(app)/(user)/apply_loans" push asChild>
                  <Pressable className="bg-secondary flex w-full flex-row items-center justify-center rounded-xl py-4">
                    <Text className="font-quicksand-bold text-base">GET THE FIRST LOAN</Text>
                  </Pressable>
                </Link>
              </View>
            </View>
            <View className="absolute right-2 -bottom-2 left-2 z-40 h-32 rounded-3xl bg-white p-4 shadow-md shadow-gray-300"></View>
            <View className="absolute right-4 -bottom-4 left-4 h-32 rounded-3xl bg-white p-4 shadow-md shadow-gray-300"></View>
          </View>

          <View className="flex w-full flex-row flex-wrap items-center gap-3">
            <View className="flex-1 gap-4 overflow-hidden rounded-xl bg-[#f2f2f2] p-4">
              <Text className="font-quicksand-medium z-50 text-sm">Low interest rate </Text>
              <Text className="font-quicksand-semibold z-50 text-base leading-4">
                Save more on every payment.
              </Text>
              <View className="-z-50 -mt-8 flex w-full flex-row justify-end">
                <FontAwesome name="calculator" size={60} color="#d1d5dc" />
              </View>
            </View>
            <View className="flex-1 gap-4 overflow-hidden rounded-xl bg-[#f2f2f2] p-4">
              <Text className="font-quicksand-medium text-sm">Flexible terms</Text>
              <Text className="font-quicksand-semibold text-base leading-4">
                Loans that adapt to you.
              </Text>
              <View className="-z-50 -mt-8 flex w-full flex-row justify-end">
                <FontAwesome name="calendar" size={60} color="#d1d5dc" />
              </View>
            </View>
            <View className="w-full rounded-xl bg-[#f2f2f2] px-4 py-6">
              <View className="flex flex-row items-center gap-3">
                <AntDesign name="clock-circle" size={60} color="#d1d5dc" />
                <View className="flex-1 flex-col gap-4">
                  <Text className="font-quicksand-medium text-sm">Fast Access</Text>
                  <Text className="font-quicksand-semibold text-base leading-4">
                    Approved in 5–20 minutes.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
