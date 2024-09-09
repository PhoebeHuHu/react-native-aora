import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
    
    const [showPassword, setShowPassword] = useState(false)
  return (
      <View className='border-2 border-black-200 w-full h-16 bg-black-100 px-4 rounded-lg focus:border-secondary items-center flex-row space-x-4'>
        <TextInput
            className='mt-0.5 text-white flex-1 font-pregular text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
        />
        
        <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image source={icons.search} className="w-5 h-5" resizeMode="contain"/>
        </TouchableOpacity>
        
      </View>
  )
}

export default SearchInput