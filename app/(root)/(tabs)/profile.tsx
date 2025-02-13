import {
  View,
  Text,
  Alert,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import icons from "@/constants/icons";
import { settings } from "@/constants/data";

interface SettingsProp {
  onPress?: () => void;
  title: string;
  icon: ImageSourcePropType;
  textStyle?: string;
  showArrow?: boolean;
  tintColor?: string;
}

const SettingsItem = ({
  onPress,
  title,
  icon,
  textStyle,
  showArrow = true,
  tintColor,
}: SettingsProp) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-3"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} tintColor={tintColor} className="size-6" />
      <Text
        className={`text-lg font-nunito-medium text-black-300 ${textStyle}`}
      >
        {title}
      </Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

const Profile = () => {
  const { refetch, user } = useGlobalContext();
  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      console.log("Success", "User logout successful");
      refetch();
    } else Alert.alert("Error", "Failed to logout");
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-nunito-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={{ uri: user?.avatar }}
              className="size-44 relative rounded-full"
            />
            <View className="absolute bottom-10 right-2">
              <Image
                source={icons.edit}
                tintColor="#ff8000"
                className="size-9"
              />
            </View>

            <Text className="text-2xl font-nunito-bold mt-2">{user?.name}</Text>
          </View>
        </View>

        <View className="flex flex-col mt-10">
          <SettingsItem
            icon={icons.user}
            title="User Info"
            tintColor="#191D31"
          />
          <SettingsItem
          icon={icons.payment
          }
          title="Adoption Fees"
          />
        </View>

        <View className="border-primary-200 pt-5 mt-5 border-t flex flex-col">
          {settings.slice(2).map((item, index) =>(
            <SettingsItem
            key={index}
            {...item}

            />
          ))}
        </View>

        <View>
          <SettingsItem 
          title="Logout"
          icon={icons.logout}
          textStyle="text-danger"
          showArrow={false}
          onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
