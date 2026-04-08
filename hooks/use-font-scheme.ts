import {
  QuicksandBold,
  QuicksandLight,
  QuicksandMedium,
  QuicksandReguilar,
  QuicksandSemiBold,
} from '@/constants/fonts';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

export default function useFontScheme() {
  const [fontLoaded, error] = useFonts({
    'Quicksand-Light': QuicksandLight,
    'Quicksand-Regular': QuicksandReguilar,
    'Quicksand-Medium': QuicksandMedium,
    'Quicksand-SemiBold': QuicksandSemiBold,
    'Quicksand-Bold': QuicksandBold,
  });

  React.useEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  return {
    fontLoaded,
    error,
  };
}
