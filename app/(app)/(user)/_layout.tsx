import { Stack } from 'expo-router';
import React from 'react';

export const unstable_setting = {
  anchor: '(tabs)',
};

export default function UserLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="apply_loans"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="disbursement_process"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
