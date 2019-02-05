import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

class StoresScreen extends PureComponent {
  state = {  }
  render() { 
    return ( 
      <Box f={1} center>
      <StatusBar barStyle="light-content" />
        <Text>Stores Screen</Text>
      </Box>
     );
  }
}
 
export default StoresScreen;