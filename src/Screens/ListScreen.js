import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

class ListScreen extends PureComponent {
  state = {  }
  render() { 
    return ( 
      <Box f={1} center>
      <StatusBar barStyle="light-content" />
        <Text>list Screen</Text>
      </Box>
     );
  }
}
 
export default ListScreen;