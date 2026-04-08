import { Stack } from 'expo-router';

export const unstable_setting = {
  anchor: '(auth)',
};

export default function AppLayout() {
  const hasUser = false;

  return (
    <Stack>
      <Stack.Protected guard={!hasUser}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={hasUser}>
        <Stack.Screen name="(user)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
