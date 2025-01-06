import { View, Text } from "react-native";
import React from "react";
import CustomGradient from "@/components/CustomGradient";
import Button from "@/components/Button";
import { router } from "expo-router";

const SingleMeditation = () => {
  return (
    <CustomGradient colors={["rgba(0,0,0,0.8)", "transparent"]}>
      <View>
        <Button
          title="Adjust Duration"
          onPress={() => router.push("/adjust-meditation-duration")}
        />
      </View>
    </CustomGradient>
  );
};

export default SingleMeditation;
