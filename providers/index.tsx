import { HeroUINativeProvider, type HeroUINativeConfig } from 'heroui-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

const config: HeroUINativeConfig = {
  // Global text configuration
  textProps: {
    minimumFontScale: 0.5,
    maxFontSizeMultiplier: 1.5,
    allowFontScaling: true,
    adjustsFontSizeToFit: false,
  },
  // Global animation configuration
  animation: 'disable-all', // Optional: disable all animations
  // Developer information messages configuration
  devInfo: {
    stylingPrinciples: true, // Optional: disable styling principles message
  },
  // Global toast configuration
  // Option 1: Configure toast with custom settings
  toast: {
    defaultProps: {
      variant: 'default',
      placement: 'top',
    },
    insets: {
      top: 0,
      bottom: 6,
      left: 12,
      right: 12,
    },
    maxVisibleToasts: 3,
  },
  // Option 2: Disable toast entirely
  // toast: false,
  // or
  // toast: 'disabled',
};

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <HeroUINativeProvider config={config}>{children}</HeroUINativeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
