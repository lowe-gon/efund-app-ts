import { HeroUINativeProvider } from 'heroui-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <HeroUINativeProvider>{children}</HeroUINativeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
