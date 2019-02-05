import React, { PureComponent } from 'react';
import { Box, Text } from 'react-native-design-utility';

import { StatusBar } from 'react-native';

class OrderScreen extends PureComponent {
  state = {}
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="light-content" />
        <Text>order Screen</Text>
      </Box>
    );
  }
}

export default OrderScreen;