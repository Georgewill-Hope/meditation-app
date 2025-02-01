import { View, Text, ImageBackground, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OTHER_IMAGES from "@/constants/other-images";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import Button from "@/components/Button";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    router.push(`/meditate`);
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
            <Text className="text-2xl font-smono mb-5">Sign Up</Text>
            <CustomInput
              value={username}
              setValue={(e) => setUsername(e)}
              placeholder="Username"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              firstIcon={
                <MaterialIcons name={"person"} size={24} color="black" />
              }
              containerStyles="mb-10"
            />
            <CustomInput
              value={email}
              setValue={(e) => setEmail(e)}
              placeholder="Email"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              firstIcon={<MaterialIcons name="email" size={24} color="black" />}
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
              title="REGISTER"
              containerStyles="mt-10 shadow"
              disabled={isLoading}
              onPress={handleSubmit}
            />
            <View className="flex-row items-center justify-between mt-3">
              <Text className="text-lg font-smono">
                {"Have an account already?"}
              </Text>
              <Link href="/sign-in" className="text-lg font-smono underline">
                SignIn
              </Link>
            </View>
          </View>
        </View>
        <StatusBar style="light" />
      </LinearGradient>
    </ImageBackground>
  );
};

export default SignUp;
