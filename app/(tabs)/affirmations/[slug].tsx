import { View, Text } from "react-native";
import React from "react";
import CustomGradient from "@/components/CustomGradient";

const SingleAffirmation = () => {
  return (
    <CustomGradient
      colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)"]}
    >
      <View>
        <Text>SingleAffirmation</Text>
      </View>
    </CustomGradient>
  );
};

export default SingleAffirmation;
