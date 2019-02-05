import React, { PureComponent } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Animated, Alert } from 'react-native';
import { inject, observer } from "mobx-react/native"
import FBSDK, { LoginManager, AccessToken } from "react-native-fbsdk";

import OnboardingLogo from '../../commons/OnboardingLogo';
import LoginButton from './LoginButton';


class LoginScreen extends PureComponent {
  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    this.opacityAnim();
  }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000
    }).start()
  }

  handleFacebookLogin = () => {
    LoginManager.logInWithReadPermissions(["public_profile", "email"])
      .then(result => {
        if (result.isCancelled) {
          Alert.alert("There was an issue login you in")
        } else {
          AccessToken.getCurrentAccessToken()
            .then(resp => {
              console.log("entered succesful facebook authentication", resp.accessToken.toString())

              this.props.AuthStore.login(resp.accessToken.toString(), "FACEBOOK")

            })
        }
      }, (error) => {
        return error
      })
  }

  handleGoogleLogin = () => {
    Alert.alert("google")
  }

  render() {
    const { opacity } = this.state;
    console.log("props from mobx ", this.props.currentUser)

    return (
      <Box f={1} bg="white" center>
        <Animated.View style={{ flex: 1, opacity }}>
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </Animated.View>

        <Animated.View style={{ flex: 0.9, width: "100%", opacity }}>
          <LoginButton
            icon="googleIcon"
            type="google"
            bgColor="#1976d2"
            onPress={() => this.handleGoogleLogin()}
          >
            Continue with google
          </LoginButton>
          <LoginButton
            icon="facebookIcon"
            type="facebook"
            bgColor="#4d6fa9"
            onPress={() => this.handleFacebookLogin()}
          >
            Continue with facebook
          </LoginButton>
        </Animated.View>
      </Box>
    );
  }
}


export default inject("AuthStore")(LoginScreen);