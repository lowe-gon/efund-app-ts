import useFontScheme from '@/hooks/use-font-scheme';
import '../global.css';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { error, fontLoaded } = useFontScheme();

  if (!fontLoaded && !error) return null;

  return <Stack />;
}
