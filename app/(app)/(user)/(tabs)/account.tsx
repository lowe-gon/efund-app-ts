import { accountNavigations } from '@/constants/navigations';
import { cn } from '@/libs/cn';
import { Ionicons } from '@expo/vector-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function AccountScreen() {
  return (
    <View className="bg-background flex-1">
      {/* Header */}

      <ScrollView className="flex-1" contentContainerClassName="pt-safe px-4">
        <View className="pb-1">
          <Text className="font-quicksand-bold text-2xl">Settings</Text>
        </View>

        {/* Content */}
        <View className="flex-1 gap-6">
          <View className="bg-muted rounded-3xl p-4">
            <View className="flex flex-row items-center gap-2">
              {/* Avatar */}
              <View className="h-16 w-16 rounded-full bg-white"></View>
              {/* Info */}
              <View className="flex-col">
                <Text className="font-quicksand-bold text-lg">Juan Dela Cruz</Text>
                <View className="flex-row items-center gap-2">
                  <Text className="font-quicksand-medium text-sm leading-4 text-gray-500">
                    example@email.com
                  </Text>
                  <Text className="font-quicksand-medium text-sm leading-4 text-gray-500">
                    &middot;
                  </Text>
                  <Text className="font-quicksand-medium text-sm leading-4 text-gray-500">
                    +639123456789
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="bg-muted rounded-3xl px-4">
            <Text className="font-quicksand-semibold pt-4 text-sm text-gray-500">Account</Text>

            {accountNavigations.account.map(({ title, path, icon }, index) => {
              const isLast = index === accountNavigations.account.length - 1;
              return (
                <View key={title} className="flex w-full flex-row items-center">
                  <View className="w-8">
                    <HugeiconsIcon icon={icon} size={26} />
                  </View>
                  <View
                    className={cn(
                      'flex flex-1 flex-row items-center justify-between py-4',
                      !isLast && 'border-b border-black/20',
                    )}>
                    <Text className="font-quicksand-semibold text-base">{title}</Text>
                    <Ionicons name="chevron-forward" size={20} />
                  </View>
                </View>
              );
            })}
          </View>

          <View className="bg-muted rounded-3xl px-4">
            <Text className="font-quicksand-semibold pt-4 text-sm text-gray-500">General</Text>
            {accountNavigations.general.map(({ title, path, icon }, index) => {
              const isLast = index === accountNavigations.general.length - 1;
              return (
                <View key={title} className="flex w-full flex-row items-center">
                  <View className="w-8">
                    <HugeiconsIcon icon={icon} size={26} />
                  </View>
                  <View
                    className={cn(
                      'flex flex-1 flex-row items-center justify-between py-4',
                      !isLast && 'border-b border-black/20',
                    )}>
                    <Text className="font-quicksand-semibold text-base">{title}</Text>
                    <Ionicons name="chevron-forward" size={20} />
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
