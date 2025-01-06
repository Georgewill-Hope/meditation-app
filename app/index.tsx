import { View, Text, ImageBackground } from "react-native";
import beachImage from "@/constants/meditation-images";
import CustomGradient from "@/components/CustomGradient";
import Button from "@/components/Button";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <ImageBackground
      source={beachImage[3]}
      resizeMode="cover"
      className="flex-1 w-full"
    >
      <CustomGradient colors={["rgba(0,0,0,0.8)", "transparent"]}>
        <View className="flex-1 w-full justify-between items-center py-14">
          <View>
            <Text className="text-white text-center text-4xl mb-2 font-smono">
              Simple Meditation
            </Text>
            <Text className="text-xl text-white text-center font-smono">
              Simplify Meditation for Everyone
            </Text>
          </View>
          <Button
            title="Get Started"
            onPress={() => router.push("/meditate")}
          />
        </View>
        <StatusBar style="light" />
      </CustomGradient>
    </ImageBackground>
  );
};

export default Home;
