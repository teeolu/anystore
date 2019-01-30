import React, { PureComponent } from 'react';
import { Box } from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnboardingLogo';

class SplashScreen extends PureComponent {
  state = {}

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Auth")
    }, 2000);
  }

  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    );
  }
}

export default SplashScreen;