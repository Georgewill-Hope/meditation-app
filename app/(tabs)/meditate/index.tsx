import { View, Text, FlatList } from "react-native";
import CustomGradient from "@/components/CustomGradient";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import Card from "@/components/Card";
import { router } from "expo-router";
import MEDITATION_IMAGES from "@/constants/meditation-images";

const Meditate = () => {
  return (
    <CustomGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <View className="my-7">
        <Text className="text-white font-rmono text-4xl mb-3">
          Welcome Hope
        </Text>
        <Text className="text-white font-rmono text-xl">
          Start your meditation practice today
        </Text>
      </View>
      <FlatList
        data={MEDITATION_DATA}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <Card
            title={item.title}
            image={MEDITATION_IMAGES[index]}
            containerStyles="h-56 mb-7"
            onPress={() => router.push(`/meditate/${item.id}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text className="text-white">...Empty</Text>}
      />
    </CustomGradient>
  );
};

export default Meditate;
