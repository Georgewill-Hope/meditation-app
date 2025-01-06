import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import CustomGradient from "@/components/CustomGradient";
import { useLocalSearchParams } from "expo-router";

import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import Back from "@/components/Back";

interface SingleAffirmationProps {
  id: number;
  text: string;
  image: any;
}

const SingleAffirmation = () => {
  const [affirmation, setAffirmation] = useState<SingleAffirmationProps>();
  const [affirmationText, setAffirmationText] = useState<string[]>([]);
  const { slug } = useLocalSearchParams();

  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationsArray = AFFIRMATION_GALLERY[i].data;

      const affirmationInAffirmationsArrayWithIdThatMatchesTheSlug =
        affirmationsArray.find(
          (affirmation) => affirmation.id === Number(slug)
        );

      if (affirmationInAffirmationsArrayWithIdThatMatchesTheSlug) {
        const splitAffirmationToDisplayText =
          affirmationInAffirmationsArrayWithIdThatMatchesTheSlug.text.split(
            "."
          );

        const removeEmptyStringsFromAffirmationToDisplayText =
          splitAffirmationToDisplayText.filter((text) => text);
        setAffirmationText(removeEmptyStringsFromAffirmationToDisplayText);
        setAffirmation(affirmationInAffirmationsArrayWithIdThatMatchesTheSlug);
        return;
      }
    }
  }, []);

  return (
    <ImageBackground source={affirmation?.image} className="flex-1">
      <CustomGradient
        colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)"]}
      >
        <View>
          <Back />

          <View className="mt-8">
            {affirmationText.map((sentence, index) => (
              <Text
                className="text-white text-3xl text-center font-rmono leading-10 mb-10"
                key={index}
              >
                {sentence}.
              </Text>
            ))}
          </View>
        </View>
      </CustomGradient>
    </ImageBackground>
  );
};

export default SingleAffirmation;
