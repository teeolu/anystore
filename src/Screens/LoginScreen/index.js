import React, { PureComponent } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Alert, Animated, Easing } from 'react-native';

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

  handleButtonPress = (type) => {
    Alert.alert(type)
  }

  render() {
    const { opacity } = this.state;

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
            onPress={() => this.handleButtonPress("google")}
          >
            Continue with google
          </LoginButton>
          <LoginButton
            icon="facebookIcon"
            type="facebook"
            bgColor="#4d6fa9"
            onPress={() => this.handleButtonPress("facebook")}
          >
            Continue with facebook
          </LoginButton>
        </Animated.View>
      </Box>
    );
  }
}

export default LoginScreen;