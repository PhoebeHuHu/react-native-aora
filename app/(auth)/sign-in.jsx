import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomFormField from '../../components/CustomFormField'
import CustomBtn from '../../components/CustomBtn'
import { Link } from 'expo-router'

const SignIn = () => {
    const [form, setForm] = useState({
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
                    <Text className='font-psemibold text-white text-2xl mt-10'>Sign In</Text>

                    <CustomFormField
                        title="Email"
                        value={form.email}
                        /*function that will be called whenever the text in the input field changes
                        Copies all existing properties from form into a new object.
                        Overrides or adds the email property with the new value e. */
                        handleChangeText={(e) => setForm({...form,email:e})}
                        otherStyles="mt-10"
                        keyboardType="email-address"
                    />

                    <CustomFormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({...form,password:e})}
                        otherStyles="mt-7"
                    />

                    <CustomBtn 
                        title="Log In" 
                        containerStyles="mt-7" 
                        handlePress={submit} 
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center items-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">Don't have account?</Text>
                        <Link className="text-lg text-secondary-100 font-psemibold" href="/sign-up">Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn