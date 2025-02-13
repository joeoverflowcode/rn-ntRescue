import { View, Text, Alert, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { logout } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import icons from '@/constants/icons'

const Profile = () => {
  const { refetch, user } = useGlobalContext()
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
<SafeAreaView className='h-full bg-white'>
  <ScrollView showsVerticalScrollIndicator={false}
  contentContainerClassName='pb-32 px-7'
  >
    <View className='flex flex-row items-center justify-between mt-5'>
      <Text className='text-xl font-nunito-bold'>Profile</Text>
      <Image source={icons.bell} className='size-5'/> 
    </View>

    <View className='flex flex-row justify-center mt-5'>
      <View className='flex flex-col items-center relative mt-5'>
        <Image source={{uri: user?.avatar}} className='size-44 relative rounded-full'/>
        <View className='absolute bottom-10 right-2'>
          <Image source={icons.edit} tintColor="#ff8000" className='size-9'/>
        </View>

        <Text className='text-2xl font-nunito-bold mt-2'>{user?.name}</Text>
      </View>
    </View>

    

  </ScrollView>
</SafeAreaView>
  )
}

export default Profile