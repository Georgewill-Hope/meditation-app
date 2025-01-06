import { View, Text, ImageBackground } from "react-native";
import React from "react";
import CustomGradient from "@/components/CustomGradient";
import Button from "@/components/Button";
import { router, useLocalSearchParams } from "expo-router";
import Back from "@/components/Back";
import MEDITATION_IMAGES from "@/constants/meditation-images";

const SingleMeditation = () => {
  const { slug } = useLocalSearchParams();

  return (
    <ImageBackground
      source={MEDITATION_IMAGES[Number(slug) - 1]}
      className="flex-1"
    >
      <CustomGradient colors={["rgba(0,0,0,0.8)", "transparent"]}>
        <View className="flex-1 justify-between py-10">
          <Back />

          <View className="bg-white h-56 w-56 mx-auto rounded-full justify-center">
            <Text className="text-center text-4xl font-rmono">00:00</Text>
          </View>
          <View>
            <Button
              title="Adjust Duration"
              containerStyles="mb-5"
              onPress={() => router.push("/adjust-meditation-duration")}
            />
            <Button title="Start Meditation" onPress={() => {}} />
          </View>
        </View>
      </CustomGradient>
    </ImageBackground>
  );
};

export default SingleMeditation;
