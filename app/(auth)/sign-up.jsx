import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomFormField from '../../components/CustomFormField'
import CustomBtn from '../../components/CustomBtn'
import { Link } from 'expo-router'

const SignUp = () => {
    const [form, setForm] = useState({
        username:'',
        email:'',
        password:''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit =() => {

    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className='w-full justify-center h-full px-4 my-6'>
                    <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35]'/>
                    <Text className='font-psemibold text-white text-2xl mt-10'>Sign Up</Text>

                    <CustomFormField
                        title="Username"
                        value={form.username}
                        /*function that will be called whenever the text in the input field changes
                        Copies all existing properties from form into a new object.
                        Overrides or adds the email property with the new value e. */
                        handleChangeText={(e) => setForm({...form,username:e})}
                        otherStyles="mt-10"
                    />

                    <CustomFormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({...form,email:e})}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <CustomFormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({...form,password:e})}
                        otherStyles="mt-7"
                    />

                    <CustomBtn 
                        title="Sign Up" 
                        containerStyles="mt-7" 
                        handlePress={submit} 
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center items-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">Already have an account?</Text>
                        <Link className="text-lg text-secondary-100 font-psemibold" href="/sign-in">Login</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp