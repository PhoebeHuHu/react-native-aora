import { View, Text } from 'react-native'
import React from 'react'

const InfoBox = ({title, containerStyles,titleStyles,subtitle,subtitleStyles}) => {
  return (
    <View className={containerStyles}>
        <Text className={`font-psemibold text-center text-white ${titleStyles}`}>{title}</Text>
        <Text className={`text-base text-center text-gray-100 font-pregular ${subtitleStyles}`}>{subtitle}</Text>
    </View>
  )
}

export default InfoBox