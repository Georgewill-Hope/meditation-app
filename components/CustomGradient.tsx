import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

interface CustomGradientProps {
  children: React.ReactNode;
  colors: string[];
}

const CustomGradient = ({ children, colors }: CustomGradientProps) => {
  return (
    <LinearGradient colors={colors} className="flex-1 w-full px-7">
      <SafeAreaView className="flex-1 w-full">
        {children}
        <StatusBar style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CustomGradient;
