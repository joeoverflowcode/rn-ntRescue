import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Dog = () => {
    const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>Dog {id}</Text>
    </View>
  )
}

export default Dog