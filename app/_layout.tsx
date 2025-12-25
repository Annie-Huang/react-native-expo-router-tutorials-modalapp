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

      {/* Click outside on this webmodal will work too! (from the implementation of webmodal.tsx) */}
      <Stack.Screen
        name='webmodal'
        options={{
          title: 'Web Modal',
          presentation: 'transparentModal',
          animation: 'fade',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
