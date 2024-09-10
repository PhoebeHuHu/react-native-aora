
import { getUserPosts, searchPosts } from '../../lib/appwrite';
import { View, Text, FlatList,Image, TouchableOpacity} from 'react-native'
import React, { useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyState from '../../components/EmptyState'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider';
import { icons } from '../../constants';
import InfoBox from '../../components/InfoBox';

const Profile = () => {
  const {user, setUser, setIsLoggedIn} = useGlobalContext();
  const {data:posts} = useAppwrite(()=>getUserPosts(user.$id));
  const logout = () => {}
  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <VideoCard video={item}/>
        )}
        ListHeaderComponent={()=>(
          <View className='mt-6 mb-12 px-4 justify-center items-center w-full'>
            {/* logout btn */}
            <TouchableOpacity 
              className='w-full items-end mb-10'
              onPress={logout}
            >
              <Image source={icons.logout} resizeMode='contain' className='w-6 h-6'/>
            </TouchableOpacity>

            {/* user avatar */}
            <View className='w-[56px] h-[56px] border border-secondary justify-center items-center p-0.5 rounded-lg'>
                <Image source={{uri:user.avatar}} className='w-full h-full rounded-lg' resizeMode='cover'/>
            </View>
            
            <InfoBox title={user.username} containerStyles='mt-5' titleStyles = 'text-2xl'/>
            <View className='mt-5 flex-row'>
              <InfoBox 
                title={posts.length || 0} 
                subtitle='Posts' 
                containerStyles='mr-10 items-center' 
                titleStyles='text-xl' 
              />
              <InfoBox
                title={240} 
                subtitle='Views' 
                containerStyles='items-center' 
                titleStyles='text-xl'               
              />
            </View>
          </View>
        )}  
        ListEmptyComponent={()=>(
          <EmptyState
            title='No Videos Found'
            subtitle='No videos found for this search query'
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Profile