import { View, Text } from "react-native";
import React from "react";
import CustomGradient from "@/components/CustomGradient";
import { router } from "expo-router";
import Back from "@/components/Back";
import Button from "@/components/Button";

const AdjustMeditationDuration = () => {
  return (
    <CustomGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <View className="flex-1">
        <View className="mb-20">
          <Back />
        </View>
        <Text className="text-white text-3xl font-rmono text-center mb-10">
          Set Meditation Duration
        </Text>
        <View className="">
          <Button
            title="10 Seconds"
            containerStyles="mb-5"
            onPress={() => {}}
          />
          <Button
            title="5 Minutes"
            containerStyles="mb-5"
            onPress={() => {}}
          />
          <Button
            title="10 Minutes"
            containerStyles="mb-5"
            onPress={() => {}}
          />
          <Button title="15 Minutes" onPress={() => {}} />
        </View>
      </View>
    </CustomGradient>
  );
};

export default AdjustMeditationDuration;
