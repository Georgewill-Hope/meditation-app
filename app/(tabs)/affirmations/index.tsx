import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import CustomGradient from "@/components/CustomGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import Card from "@/components/Card";
import { router } from "expo-router";
import AffirmationsCard from "@/components/AffirmationsCard";

const Affirmations = () => {
  return (
    <CustomGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <View className="my-7">
        <Text className="text-white text-2xl font-smono">
          Change your believes with affirmations
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {AFFIRMATION_GALLERY.map((affirmation, index) => (
          <AffirmationsCard data={affirmation.data} title={affirmation.title} key={index}/>
        ))}
      </ScrollView>
    </CustomGradient>
  );
};

export default Affirmations;
