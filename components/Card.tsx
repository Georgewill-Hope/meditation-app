import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ImageBackground, Pressable } from "react-native";

interface CardProps {
  title?: string;
  image: string | number;
  containerStyles: string;
  onPress: () => void;
}

const Card = ({ title, image, containerStyles, onPress }: CardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-md overflow-hidden ${containerStyles}`}
    >
      <ImageBackground source={image} className="flex-1">
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
          className="flex-1"
        >
          <View className="flex-1 items-center justify-center rounded-xl">
            <Text className="text-white text-center font-smono text-2xl">
              {title}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

export default Card;
