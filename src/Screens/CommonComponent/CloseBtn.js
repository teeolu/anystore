import React from 'react';
import Icon from "react-native-vector-icons/EvilIcons";
import HeaderBtn from './HeaderBtn';
import { theme } from '../../constants/theme';

const CloseBtn = ({ color, size, ...rest }) => {
  return (
    <HeaderBtn {...rest}>
      <Icon
        color={color || theme.color.green}
        size={size || 18}
        name="close"
      />
    </HeaderBtn>
  );
}

// CloseBtn.defaultProps = {
//   color: theme.color.green,
//   size: 18
// }

export default CloseBtn;