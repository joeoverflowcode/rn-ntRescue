import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { categories } from "@/constants/data";
import { router } from "expo-router";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );
  const handleCategoryPress = (category: string) => {
    if(selectedCategory === category) {
      setSelectedCategory('All')
      router.setParams({filter: 'All'})
      return
    }
    setSelectedCategory(category)
    router.setParams({filter:category})
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.category)}
          key={index}
          className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
            selectedCategory === item.category
              ? "bg-primary-300"
              : "bg-primary-100 border border-primary-200"
          }`}
        >
          <Text
            className={`text-sm ${
              selectedCategory === item.category
                ? "text-white font-nunito-bold mt-0.5"
                : "text-black-300 font-nunito"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
