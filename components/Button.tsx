import { View, Text, Pressable } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  containerStyles?: string;
  textStyles?: string;
}

const Button = ({
  title,
  textStyles,
  containerStyles,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`w-full bg-white py-4 rounded-lg ${containerStyles}`}
    >
      <Text className={`${textStyles} font-smono text-lg text-center`}>{title}</Text>
    </Pressable>
  );
};

export default Button;
