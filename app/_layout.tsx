import { Stack } from 'expo-router';

export default function RootLayout() {
  // return <Stack />;
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Home' }} />
      <Stack.Screen
        name='modal'
        options={{ title: 'Modal', presentation: 'modal' }} // unable to swap down to make the modal disappear like the ones shows in the tutorial
      />
    </Stack>
  );
}
