import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Search() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-dark-200">Hello from Expo Router 🚀</Text>
      <Link href={{ pathname: "/movie/[id]", params: { id: "avengers" } }}>
        Go Avengers
      </Link>

    </View>
  );
}
