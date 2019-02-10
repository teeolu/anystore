import React, { PureComponent } from 'react';
import { Box } from 'react-native-design-utility';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import OnboardingLogo from '../../commons/OnboardingLogo';
import { getAuthToken } from '../../Utils';
import { getUserInfo } from '../../Store/actions/authActions';

class SplashScreen extends PureComponent {
  state = {}

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth = async () => {
    const token = await getAuthToken();

    if (token) {
      this.props.getUserInfo(token).then(res => {
        

        this.props.navigation.navigate("Main")
      })
    } else {
      this.props.navigation.navigate("Auth")
    }

  }

  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ getUserInfo }, dispatch)
)

export default connect(null, mapDispatchToProps)(SplashScreen)