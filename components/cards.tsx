import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'

export const FeaturedCard = () => {
  return (
    <TouchableOpacity className='relative w-60 h-80'>
        <Image source={{uri: "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg"}} className='size-full rounded-2xl'/>
        <Image source={images.cardGradient} className='absolute bottom-0 size-full rounded-2xl'/>

        <View className='flex flex-col inset-x-5 items-start absolute bottom-5'>
            <Text className='text-xl font-nunito-extra-bold text-white' numberOfLines={1}>Abigail</Text>
            <Text className='text-base font-nunito text-white' numberOfLines={1}>Female</Text>
            <View className='flex flex-row items-center justify-between w-full'>
                <Text className='text-xl font-nunito-extra-bold text-white'>
                    4 years old
                </Text>
                <Image source={icons.heart} className='size-6'/>
            </View>
        </View>
    </TouchableOpacity>
  )
}

