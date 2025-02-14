import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import { Image, Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

export default function Index() {
  const {user} = useGlobalContext()
  

  return (
<SafeAreaView>
  <View className="px-5">
    <View className="flex flex-row items-center justify-between mt-5">
      <View className="flex flex-row">
        <Image source={{uri: user?.avatar}} className="size-12 rounded-full"/>
        <View className="flex flex-col items-start ml-2 justify-center">
          <Text className="text-xs font-nunito text-black-200">
            Hello,
          </Text>
          <Text className="text-base text-black-300 font-nunito-medium">
            {user?.name}
          </Text>
        </View>
      </View>
      <Image source={icons.bell} className="size-6"/>
    </View>
  </View>
</SafeAreaView>
  );
}
