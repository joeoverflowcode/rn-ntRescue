import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import React from "react";
import { Alert, Text, TouchableOpacity, View, } from "react-native";


export default function Index() {
  const {refetch, isLoggedIn} = useGlobalContext()
  
  const handleLogout = async () => {
    const result = await logout()

    if(result) {
      console.log("Success", 'User logout successful')
      refetch()
    } else (
      Alert.alert('Error', 'Failed to logout')
    )
  }

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
      {!isLoggedIn && <Link href="/sign-in">Sign In</Link>}
      <Link href="/search">Search</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/dogs/99">Dog</Link>
      <TouchableOpacity onPress={handleLogout}><Text>Logout</Text></TouchableOpacity>
      {/* <Link onPress={handleLogout}>Log Out</Link> */}
    </View>
  );
}
