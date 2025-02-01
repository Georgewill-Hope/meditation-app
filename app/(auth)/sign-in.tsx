import { View, Text, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OTHER_IMAGES from "@/constants/other-images";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/Button";
import { Link, router } from "expo-router";

const SingIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const handleLogin = async () => {
    router.push("/meditate");
  };
  return (
    <ImageBackground
      source={OTHER_IMAGES.stone}
      className="flex-1"
      resizeMode="cover"
      blurRadius={0.99}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)", "rgba(0,0,0,0.3)"]}
        className="flex-1"
      >
        <View className="flex-1 w-full">
          <View className="flex-[40%] items-center justify-center">
            <MaterialCommunityIcons name="butterfly" size={65} color="white" />
            <Text className="text-white text-3xl font-smono text-center">
              Welcome
            </Text>
          </View>
          <View className="flex-[60%] w-full bg-white/80 rounded-s-[30px] p-10">
            <Text className="text-2xl font-smono mb-5">Sign In</Text>
            <CustomInput
              value={email}
              setValue={(e) => setEmail(e)}
              placeholder="Email"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              firstIcon={
                <MaterialIcons name={"person"} size={24} color="black" />
              }
              containerStyles="mb-10"
            />
            <CustomInput
              value={password}
              setValue={(e) => setPassword(e)}
              placeholder="Password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              firstIcon={
                <MaterialIcons name={"lock"} size={24} color="black" />
              }
            />

            <Button
              title="LOGIN"
              containerStyles="mt-10 shadow"
              onPress={handleLogin}
            />
            <View className="flex-row items-center justify-between mt-3">
              <Text className="text-lg font-smono">
                {"Don't have an account?"}
              </Text>
              <Link href="/sign-up" className="text-lg font-smono underline">
                SignUp
              </Link>
            </View>
          </View>
        </View>
        <StatusBar style="light" />
      </LinearGradient>
    </ImageBackground>
  );
};

export default SingIn;
