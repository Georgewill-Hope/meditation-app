import { View, Text, ImageBackground, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import CustomGradient from "@/components/CustomGradient";
import Button from "@/components/Button";
import { router, useLocalSearchParams } from "expo-router";
import Back from "@/components/Back";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { useGlobalContext } from "@/context/adjust-meditation-duration";
import { Audio } from "expo-av";
import { AUDIO_FILES, MEDITATION_DATA } from "@/constants/MeditationData";

const SingleMeditation = () => {
  const { slug } = useLocalSearchParams();
  const { duration, setDuration } = useGlobalContext();

  const [startMeditation, setStartMeditation] = useState<boolean>(false);
  const [musicToPlay, setMusicToPlay] = useState<Audio.Sound>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const formattedMinutes = String(Math.floor(duration / 60)).padStart(2, "0");
  const formattedSeconds = String(Math.floor(duration % 60)).padStart(2, "0");

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const reloadMusic = async () => {
      await initializeSound();
    };
    if (duration === 0) {
      setStartMeditation(false);
      musicToPlay?.stopAsync();
      reloadMusic();
      return;
    }

    if (startMeditation && duration > 0) {
      if (isPlaying) {
        timerId = setTimeout(() => {
          setDuration((prev) => prev - 1);
        }, 1000);
      }
    }

    return () => clearTimeout(timerId);
  }, [duration, startMeditation, isPlaying]);

  useEffect(() => {
    return () => {
      if (musicToPlay) {
        setDuration(0);
      }
      musicToPlay?.unloadAsync();
    };
  }, [musicToPlay]);

  const handleToggleSetDuration = async () => {
    musicToPlay?.stopAsync();
    setDuration(0);
    setIsPlaying(false);
    router.push("/adjust-meditation-duration");
  };

  const handleToggleMeditation = async () => {
    if (duration === 0 && !startMeditation) {
      return Alert.alert("Adjust Duration To Start Session!");
    }

    setStartMeditation((prev) => !prev);
    await playMeditationMusic();
  };

  const playMeditationMusic = async () => {
    const music = musicToPlay ?? (await initializeSound());
    const status = await music.getStatusAsync();

    if (!status.isLoaded) {
      return;
    }

    if (status.isLoaded && !isPlaying) {
      await music.playAsync();
      setIsPlaying(true);
    } else {
      await music.pauseAsync();
      setIsPlaying(false);
    }
  };

  const initializeSound = async () => {
    const musicName = MEDITATION_DATA[Number(slug) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[musicName]);
    setMusicToPlay(sound);
    return sound;
  };
  return (
    <ImageBackground
      source={MEDITATION_IMAGES[Number(slug) - 1]}
      className="flex-1"
    >
      <CustomGradient colors={["rgba(0,0,0,0.8)", "transparent"]}>
        <View className="flex-1 justify-between py-10">
          <Back />

          <View className="bg-white h-56 w-56 mx-auto rounded-full justify-center">
            <Text className="text-center text-4xl font-rmono">
              {formattedMinutes}:{formattedSeconds}
            </Text>
          </View>
          <View>
            <Button
              title="Adjust Duration"
              containerStyles="mb-5"
              onPress={handleToggleSetDuration}
            />
            <Button title="Start Meditation" onPress={handleToggleMeditation} />
          </View>
        </View>
      </CustomGradient>
    </ImageBackground>
  );
};

export default SingleMeditation;
