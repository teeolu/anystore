import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import HeaderBtn from "../CommonComponent/HeaderBtn";
import { NavigationServices } from '../../api/NavigationService';

class ProfileBtn extends PureComponent {
  state = {};

  onNavigate = () => {
    NavigationServices.navigate("Profile")
  }

  render() {
    return (
      <HeaderBtn left onPress={this.onNavigate}>
        <Icon
          name="user"
          color="white"
          size={25}
        />
      </HeaderBtn>
    )
  }
}

export default ProfileBtn