import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'

const TAB_TABLE = [
    {tabName:'home', tabTitle:"Home", icon: icons.home, tabLabel:"Home"},
    {tabName:'create', tabTitle:"Create", icon: icons.plus, tabLabel:"Create"},
    {tabName:'profile', tabTitle:"Profile", icon: icons.profile, tabLabel:"Profile"},
    {tabName:'bookmark', tabTitle:"Bookmark", icon: icons.bookmark, tabLabel:"Saved"}
]

const TabIcon = ({icon,color,tabLabel,focused}) =>{
    return(
        <View className='items-center justify-center gap-2'>
            <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6'/>
            <Text className={`${focused?"font-psemibold":"font-pregular"} text-xs`} style={{color:color}}>{tabLabel}</Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel:false, 
                tabBarActiveTintColor:'#FFA001', 
                tabBarInactiveTintColor:"#CDCDE0", 
                tabBarStyle:{
                    backgroundColor:"#161622",
                    borderTopWidth:1,
                    borderTopColor:"#232533",
                    height:84
                    }
            }}>
                {TAB_TABLE.map((tab,index)=>(
                    <Tabs.Screen
                        key={index}
                        name={tab.tabName}
                        options={{title:tab.tabTitle, headerShown:false,tabBarIcon:({color,focused}) => (
                            <TabIcon icon={tab.icon} color={color} tabLabel={tab.tabLabel} focused={focused}/>
                        )}}
                    />
                ))}
                
            </Tabs>
        </>
    )
}

export default TabsLayout