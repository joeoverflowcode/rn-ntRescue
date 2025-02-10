import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";


const SignIn = () => {
const { refetch, loading, isLoggedIn} = useGlobalContext()
if(!loading && isLoggedIn) return <Redirect href="/" />

  const handleLogin = async () => {
    const result = await login()

    if(result) {
      console.log('login successful')
      refetch()
    } else (
      Alert.alert('Error', 'Failed to login')
    )
  }
  return (
    <View className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="w-full h-4/6" />

        <View>
          <Text className="text-base text-black-100 uppercase text-center">
            You're one step closer to {"\n"}finding your new family member
          </Text>

          <Text className="text-center font-nunito-extra-bold text-3xl mt-2">
            North Texas Dog Rescue
          </Text>

          <Text className="text-center mt-2 font-nunito-light text-black-100">
            Login with Google
          </Text>

          <TouchableOpacity className="bg-white shadow-md shadow-black-100 rounded-full w-full py-4 mt-5" onPress={handleLogin}>
            <View className="flex-row items-center justify-center">
              <Image source={icons.google} className="w-6 h-6" resizeMode="contain"/>
              <Text className="text-lg font-nunito-semi-bold text-black-300 ml-2">Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;
