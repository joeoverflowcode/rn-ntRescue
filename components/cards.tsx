import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

export const FeaturedCard = () => {
  return (
    <TouchableOpacity className="relative w-60 h-80">
      <Image
        source={{
          uri: "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg",
        }}
        className="size-full rounded-2xl"
      />
      <Image
        source={images.cardGradient}
        className="absolute bottom-0 size-full rounded-2xl"
      />

      <View className="flex flex-col inset-x-5 items-start absolute bottom-5">
        <Text
          className="text-xl font-nunito-extra-bold text-white"
          numberOfLines={1}
        >
          Abigail
        </Text>
        <Text className="text-base font-nunito text-white" numberOfLines={1}>
          Female
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-nunito-extra-bold text-white">
            4 years old
          </Text>
          <Image source={icons.heart} className="size-6" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <TouchableOpacity className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative">
      <Image
        source={{
          uri: "https://images.dog.ceo/breeds/mix/Sydney_Aussiedoodle_11_weeks_sml.jpg",
        }}
        className="w-full h-40 rounded-lg"
      />
      <View className="flex- flex-col mt-2">
        <Text className="text-sm font-nunito-bold text-black-300">
          Pepper
        </Text>
        <Text className="text-xs font-nunito text-black-200">Male</Text>
        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-nunito-bold text-primary-300">
            1 years old
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191d31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
