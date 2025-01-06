import { AffirmationsCardProps } from "@/types/types";
import { FlatList, Text, View } from "react-native";
import Card from "./Card";
import { router } from "expo-router";

const AffirmationsCard = ({ data, title }: AffirmationsCardProps) => {
  return (
    <View className="w-full mb-10">
      <View className="mb-3">
        <Text className="text-white text-xl font-smono">{title}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        className="w-full"
        renderItem={({ item }) => (
          <Card
            title=""
            image={item.image}
            containerStyles="h-44 w-44 mr-5"
            onPress={() => router.push(`/affirmations/${item.id}`)}
          />
        )}
        horizontal
      />
    </View>
  );
};

export default AffirmationsCard;
