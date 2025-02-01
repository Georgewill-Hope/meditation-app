import { View, Text, Pressable } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  containerStyles?: string;
  textStyles?: string;
  disabled?: boolean;
}

const Button = ({
  title,
  textStyles,
  containerStyles,
  disabled,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`w-full bg-white py-4 rounded-lg ${containerStyles} ${disabled && "opacity-50"}`}
      disabled={disabled}
    >
      <Text className={`${textStyles} font-smono text-lg text-center`}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
