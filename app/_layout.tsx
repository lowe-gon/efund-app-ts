import useFontScheme from '@/hooks/use-font-scheme';
import AppProvider from '@/providers';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { error, fontLoaded } = useFontScheme();

  if (!fontLoaded && !error) return null;

  return (
    <AppProvider>
      <Slot />
    </AppProvider>
  );
}
