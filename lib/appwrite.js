import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.phoebehuhu.aora',
    projectId:'66db9a800030066e0145',
    databaseId:'66db9cd000378ed4d4b8',
    userCollectionId:'66db9cfc001f3df5d88b',
    videoCollectionId:'66db9d2500001be3bdf0',
    storageId:'66dba2030028eade24e0'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    // Register User
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        //sign in and create the new user
        await signIn(email,password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );
        console.log('New user created:', newUser);

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


export async function signIn(email,password) {
    try {
        // 创建新的会话
        const session = await account.createEmailPasswordSession(email,password)
        return session;
    } catch (error) {
        throw new Error(error)
    }
}

export async function getCurrentUser(params) {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser =  await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId',currentAccount.$id)]
        )
        
        if (!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
} 

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error)
    }
}

export const getTrendingPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.orderDesc('$createdAt', Query.limit(7))]
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error)
    }
}

export const searchPosts = async (query) => {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.search('title', query)]
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error)
    }
}