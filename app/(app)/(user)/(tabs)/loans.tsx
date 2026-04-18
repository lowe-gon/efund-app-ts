import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function LoansScreen() {
  return (
    <View className="bg-background flex-1">
      <View className="pt-safe border-muted border-b shadow shadow-black/20">
        <Text className="font-quicksand-bold text-center text-lg">Loan History</Text>

        <ScrollView
          contentContainerClassName="px-4 pt-4"
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row items-center gap-3">
            {['Pending', 'Rejected', 'For Approval', 'Approved', 'Release'].map((item, index) => (
              <View key={index.toString()} className="relative w-26 pb-2">
                <Text className="font-quicksand-semibold text-center text-base">{item}</Text>

                {/* Underline */}
                {index === 0 && (
                  <View className="bg-secondary absolute right-0 bottom-0 left-0 h-1 rounded-full" />
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View className="px-4 pt-4">
        <View className="border-muted z-50 gap-4 rounded-3xl border bg-white p-5 shadow-md shadow-black/20">
          <View className="bg-muted flex-col gap-3 rounded-3xl p-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="font-quicksand-semibold text-sm">Loan status</Text>
              <View className="bg-secondary rounded-full px-4 py-1">
                <Text className="font-quicksand-semibold text-sm text-white">Active</Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="font-quicksand-semibold text-sm">Repayment date</Text>

              <Text className="font-quicksand-bold text-base">20-06-2026</Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="font-quicksand-semibold text-sm">Repayment amount</Text>

              <Text className="font-quicksand-bold text-base">₱ 5,000</Text>
            </View>

            <Link href={'/'} push asChild>
              <Pressable className="flex w-full flex-row items-center justify-center gap-1 rounded-full bg-white py-4">
                <Text className="text-primary font-quicksand-bold text-base">LOAN DETAILS</Text>
                <Entypo name="chevron-thin-right" size={16} color={'#032aa7'} />
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
