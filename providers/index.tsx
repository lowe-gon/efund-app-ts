import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaListener,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Uniwind } from 'uniwind';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaListener
        onChange={({ insets }) => {
          Uniwind.updateInsets(insets);
        }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <GluestackUIProvider mode={colorScheme === 'dark' ? 'dark' : 'light'}>
              {children}
            </GluestackUIProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaListener>
    </SafeAreaProvider>
  );
}
