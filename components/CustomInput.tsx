import { View, Text, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { Dispatch } from "react";

interface CustomInputProps {
  placeholder: string;
  firstIcon: React.ReactNode;
  showPassword: boolean;
  containerStyles?: string;
  setShowPassword: Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
}

const CustomInput = ({
  placeholder,
  firstIcon,
  value,
  setValue,
  containerStyles,
  showPassword,
  setShowPassword,
}: CustomInputProps) => {
  return (
    <View
      className={`w-full flex-row items-center gap-2 h-12 ${containerStyles}`}
    >
      {firstIcon}
      <View className="flex-row relative w-full h-full flex-1 justify-between items-center">
        <TextInput
          placeholder={placeholder}
          className=" border-b-black/75 border-b flex-1 text-lg font-smono p-0 h-full w-full pr-9"
          value={value}
          onChangeText={setValue}
          secureTextEntry={placeholder === "Password" && showPassword}
        />
        {placeholder === "Password" && showPassword ? (
          <AntDesign
            name="eye"
            size={24}
            color="black"
            className="absolute right-0"
            onPress={() => setShowPassword((prev) => !prev)}
          />
        ) : (
          <MaterialCommunityIcons
            name="eye-off-outline"
            size={24}
            color="black"
            className={`${
              placeholder === "Password" ? "absolute right-0" : "hidden"
            }`}
            onPress={() => setShowPassword((prev) => !prev)}
          />
        )}
      </View>
    </View>
  );
};

export default CustomInput;
