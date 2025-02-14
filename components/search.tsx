import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import icons from '@/constants/icons'
import { useState } from 'react'

function Search() {
    const [search, setSearch] = useState()
    const handleSearch = () => {

    }
  return (
    <View className='flex flex-row items-center justify-between px-4 w-full rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2'>
        <View className='flex-1 flex flex-row items-center justify-start z-50'>
        <Image source={icons.search} className='size-5' tintColor='#666876'/>
        <TextInput
        value={search}
        onChangeText={handleSearch}
        placeholder='Search for Dogs'
        className='text-sm font-nunito text-black-300 ml-2 flex-1'
        />
        </View>
        <TouchableOpacity>
            <Image source={icons.filter} className='size-5'tintColor='#66687'/>
        </TouchableOpacity>
    </View>
  )
}

export default Search