import { AsyncStorage } from 'react-native';

const TOKEN_KEY = "@anystore/token";

export const saveToken = (token) => {
  try {
    AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.log(error)
  }
}

export const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    if (token) {
      return token
    } else {
      return null
    }
  } catch (error) {
    Alert.alert("Error occured while getting auth token")
  }
}