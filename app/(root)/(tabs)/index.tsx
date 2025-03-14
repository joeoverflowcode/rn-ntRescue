import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { router } from "expo-router";
import { FeaturedCard, Card } from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row">
            <Image
              source={{ uri: user?.avatar }}
              className="size-12 rounded-full"
            />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-nunito text-black-200">Hello,</Text>
              <Text className="text-base text-black-300 font-nunito-medium">
                {user?.name}
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
      <Search />

      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-nunito-bold text-black-300">
            New Arrivals
          </Text>
          <TouchableOpacity onPress={() => router.push("/new-arrivals")}>
            <Text className="text-base font-nunito-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row gap-5 mt-5">
          <FeaturedCard />
          <FeaturedCard />
        </View>
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-nunito-bold text-black-300">
            Dogs Looking For A Home
          </Text>
          <TouchableOpacity onPress={() => router.push("/new-arrivals")}>
            <Text className="text-base font-nunito-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      
      <Filters />
      
        <View className="flex flex-row gap-5 mt-5">
          <Card />
          <Card />
      </View>
      </View>

    </SafeAreaView>
  );
}
