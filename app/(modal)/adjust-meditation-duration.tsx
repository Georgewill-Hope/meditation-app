import { View, Text } from "react-native";
import React from "react";
import CustomGradient from "@/components/CustomGradient";
import { router } from "expo-router";

const AdjustMeditationDuration = () => {
  return (
    <CustomGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <View>
        <Text onPress={() => router.back()}>AdjustMeditationDuration</Text>
      </View>
    </CustomGradient>
  );
};

export default AdjustMeditationDuration;
