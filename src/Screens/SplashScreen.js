import React, { PureComponent } from 'react';
import { Box } from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnboardingLogo';
import { inject } from "mobx-react/native";

class SplashScreen extends PureComponent {
  state = {}

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth = async () => {
    await this.props.authStore.setUpAuth();
  }

  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    );
  }
}

export default inject("authStore")(SplashScreen);