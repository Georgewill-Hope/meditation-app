import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Meditate = () => {
  return (
    <SafeAreaView>
      <Text>Meditate</Text>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Meditate;
