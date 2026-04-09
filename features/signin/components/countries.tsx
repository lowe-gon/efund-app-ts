import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetScrollView,
} from '@/components/ui/actionsheet';
import { Pressable } from '@/components/ui/pressable';
import { countries } from '@/constants/countries';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = React.useState(
    countries.find(({ iso }) => iso === 'PH')!,
  );
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const onSelectCountryHandler = (country: typeof selectedCountry) => {
    setSelectedCountry(country);
    setShowActionsheet(false);
  };

  return (
    <>
      <Pressable
        onPress={() => setShowActionsheet(true)}
        className="h-full w-20 flex-row items-center justify-center rounded-lg border border-gray-300">
        <Text className="font-quicksand-medium absolute top-1 text-xs">Country</Text>
        <View className="flex-row items-center gap-3 pt-4">
          <Text className="text-base">{selectedCountry.flag}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={12} color="#000" />
        </View>
      </Pressable>

      <Actionsheet isOpen={showActionsheet} onClose={() => setShowActionsheet(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent className="items-start">
          <ActionsheetItem className="flex w-full flex-row items-center justify-between py-4">
            <ActionsheetItemText className="font-quicksand-bold text-xl">
              Countries
            </ActionsheetItemText>
            <Pressable
              onPress={() => setShowActionsheet(false)}
              className="rounded-full bg-slate-400 p-2">
              <AntDesign name="close" size={16} />
            </Pressable>
          </ActionsheetItem>
          <ActionsheetScrollView>
            {countries.map(({ name, flag, code, iso }) => (
              <ActionsheetItem
                key={name}
                onPress={() => onSelectCountryHandler({ name, flag, code, iso })}
                className="flex w-full flex-row items-center justify-between">
                <ActionsheetItemText className="font-quicksand-medium text-sm">
                  {flag} {name} {code}
                </ActionsheetItemText>
                {selectedCountry.name === name && <Feather name="check" size={20} color="green" />}
              </ActionsheetItem>
            ))}
          </ActionsheetScrollView>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
