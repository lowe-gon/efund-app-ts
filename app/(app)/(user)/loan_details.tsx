import { Feather } from '@expo/vector-icons';
import { Folder02Icon, GoogleDocIcon, Payment02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function LoanDetailsScreen() {
  return (
    <View className="bg-background flex-1">
      <View className="pt-safe relative px-4">
        {/* Background */}
        <View className="bg-primary absolute top-0 right-0 left-0 h-86 rounded-b-[7rem]"></View>
        {/* Back Button */}
        <Pressable className="top-safe absolute left-4 z-50" onPress={router.back}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </Pressable>

        <Text className="font-quicksand-bold text-center text-lg text-white">Loan Details</Text>
      </View>
      {/* Content */}
      <ScrollView
        className="mt-4 flex-1"
        contentContainerClassName="pb-20"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}>
        <View className="flex-1 gap-4 px-4">
          <View className="z-50 gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-md shadow-black/20">
            <View className="bg-muted flex-col gap-3 rounded-3xl p-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Loan ID</Text>

                <Text className="font-quicksand-bold text-base">123456789</Text>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Loan status</Text>
                <View className="bg-secondary rounded-full px-4 py-1">
                  <Text className="font-quicksand-semibold text-sm text-white">Active</Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Loan tenor</Text>

                <Text className="font-quicksand-bold text-base">30 days</Text>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Amount disbursed</Text>

                <Text className="font-quicksand-bold text-base">₱ 25,000</Text>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Repayment amount</Text>

                <Text className="font-quicksand-bold text-secondary-foreground text-base">
                  ₱ 5,000
                </Text>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Repayment date</Text>

                <Text className="font-quicksand-bold text-base">20-06-2026</Text>
              </View>
            </View>

            <Link href={'/'} push asChild>
              <Pressable className="bg-secondary flex flex-row items-center justify-center rounded-full py-4">
                <Text className="font-quicksand-bold text-base">MAKE PAYMENT</Text>
              </Pressable>
            </Link>
          </View>

          {/* Documents */}
          <View className="z-50 gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-md shadow-black/20">
            <View className="flex flex-row items-center gap-2">
              <HugeiconsIcon icon={Folder02Icon} />
              <Text className="font-quicksand-bold text-base">Your Documents</Text>
            </View>
            <View className="bg-muted flex-col gap-3 rounded-3xl p-5">
              <View className="flex flex-row items-center gap-3">
                <HugeiconsIcon icon={GoogleDocIcon} color={'#032aa7'} />
                <Text className="font-quicksand-bold text-primary text-sm underline">
                  Key Fact Statement
                </Text>
              </View>
              <View className="flex flex-row items-center gap-3">
                <HugeiconsIcon icon={GoogleDocIcon} color={'#032aa7'} />
                <Text className="font-quicksand-bold text-primary text-sm underline">
                  Saction Letter
                </Text>
              </View>
              <View className="flex flex-row items-center gap-3">
                <HugeiconsIcon icon={GoogleDocIcon} color={'#032aa7'} />
                <Text className="font-quicksand-bold text-primary text-sm underline">
                  Loan Agreement
                </Text>
              </View>
            </View>
          </View>

          {/* Transaction History */}
          <View className="z-50 gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-md shadow-black/20">
            <View className="flex flex-row items-center gap-2">
              <HugeiconsIcon icon={Payment02Icon} />
              <Text className="font-quicksand-bold text-base">Your Transactions</Text>
            </View>
            <View className="bg-muted flex-col gap-3 rounded-3xl p-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Referrence no.</Text>

                <Text className="font-quicksand-bold text-base">123456789</Text>
              </View>

              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Loan type</Text>

                <Text className="font-quicksand-bold text-base">Salary</Text>
              </View>

              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Payment amount</Text>

                <Text className="font-quicksand-bold text-secondary-foreground text-base">
                  ₱ 5,000
                </Text>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-sm">Payment date</Text>

                <Text className="font-quicksand-bold text-base">20-06-2026</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
