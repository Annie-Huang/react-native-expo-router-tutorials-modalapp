import { Stack } from 'expo-router';

export default function RootLayout() {
  // return <Stack />;
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Home' }} />
      <Stack.Screen
        name='modal'
        options={{ title: 'Modal', presentation: 'modal' }}
      />
    </Stack>
  );
}
