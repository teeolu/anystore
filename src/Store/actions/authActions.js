import { Alert } from "react-native";

import { LOGIN, GET_USER_INFO } from "./types";
import { saveToken } from "../../Utils";
import { customerApi } from "../../api/Api";
import { NavigationServices } from "../../api/NavigationService";


export const login = async (providerToken, provider) => {
  try {
    console.log(" entered second layer of login in currentUser")
    const res = await customerApi
      .post({
        token: providerToken,
        provider
      })
      .json()

    if (res.token) {
      await saveToken(res.token);
      const user = await getUserInfo(res.token)

      NavigationServices.navigate("Main")

      return {
        type: LOGIN,
        payload: user.res
      }
    }

  } catch (error) {
    throw error
  }
}

export const getUserInfo = (token) => {
  try {
    if (token) {
      const res = customerApi.url("/me")
        .headers({ Authorization: `Bearer ${token}` })
        .get()
        .json()

      return {
        type: GET_USER_INFO,
        payload: res
      }
    }
  } catch (error) {
    Alert.alert("an error occured geting the users information")
  }
}