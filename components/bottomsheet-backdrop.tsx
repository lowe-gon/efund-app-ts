import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop as GorhomBottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React from 'react';
import { Text } from 'react-native';

export default function BottomSheetBackdrop(props: BottomSheetBackdropProps) {
  return (
    <GorhomBottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={1}>
      <Text>BottomSheetBackdrop</Text>
    </GorhomBottomSheetBackdrop>
  );
}
