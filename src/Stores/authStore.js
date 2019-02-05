import { types, flow } from "mobx-state-tree";
import { AsyncStorage, Alert } from "react-native";

import { customerApi } from "../api/Api";
import { NavigationServices } from "../api/NavigationService";
import { CurrentUserModel } from "../models/currentUser";

const TOKEN_KEY = "@anystore/token";

export const AuthStore = types
  .model("AuthStore", {
    authToken: types.maybe(types.string),
    info: types.maybe(CurrentUserModel)
  })
  .actions(self => ({
    setUpAuth: flow(function* () {
      yield self.getAuthToken();
      // yield self.getUserInfo();
    }),
    saveToken: flow(function* (token) {
      try {
        yield AsyncStorage.setItem(TOKEN_KEY, token);
      } catch (error) {
        console.log(error)
      }
    }),
    getAuthToken: flow(function* () {
      try {
        const token = yield AsyncStorage.getItem(TOKEN_KEY);

        if (token) {
          self.authToken = token;
        } else {
          NavigationServices.navigate("Auth")
        }
        NavigationServices.navigate("Main")
      } catch (error) {
        Alert.alert("Error occured while getting auth token")
      }
    }),
    login: flow(function* (providerToken, provider) {
      try {
        console.log(" entered second layer of login in currentUser")
        const res = yield customerApi
          .post({
            token: providerToken,
            provider
          })
          .json()

        if (res.token) {
          self.authToken = res.token;
          yield self.saveToken(res.token);
          yield self.getUserInfo()
        }

        console.log("login report ", res)
      } catch (error) {
        console.log("eror foem somewhre ", error)
      }
    }),
    getUserInfo: flow(function* () {
      try {
        if (self.authToken) {
          const res = yield customerApi.url("/me")
            .headers({ Authorization: `Bearer ${self.authToken}` })
            .get()
            .json()

          self.info = res;

          NavigationServices.navigate("Main")
        }
      } catch (error) {
        Alert.alert("an error occured geting the users information")
      }
    })
  }))

