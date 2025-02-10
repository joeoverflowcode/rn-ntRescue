import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="my-10">
        
      <Text className="text-center text-2xl font-nunito-bold text-black-200">
        Welcome to 
          </Text>
        <Text className="text-center text-3xl font-nunito-extrabold text-primary-300">
          North Texas Dog Rescue
      </Text>
      </View>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/dogs/99">Property</Link>
    </View>
  );
}
