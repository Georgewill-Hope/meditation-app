import { Stack } from "expo-router";

const Affirmationslayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[slug]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Affirmationslayout;
