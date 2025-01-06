import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "@/constants/Colors";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.grey,
        tabBarStyle: {
          height: 70,
          paddingTop: 5,
          backgroundColor: Colors.whiteSmoke,
          borderColor: "green",
          borderTopWidth:3,
        },

        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "Roboto-Mono",
          marginTop: 1,
        },
      }}
    >
      <Tabs.Screen
        name="meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <Entypo name="open-book" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
