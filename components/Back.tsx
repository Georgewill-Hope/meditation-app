import { View, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

interface BackProps {
  color?: string;
}

const Back = ({ color }: BackProps) => {
  return (
    <Pressable onPress={() => router.back()} className="my-5">
      <AntDesign name="leftcircleo" size={40} color={`${color ?? "white"}`} />
    </Pressable>
  );
};

export default Back;
