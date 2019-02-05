import React, { PureComponent } from 'react';
import { Box } from 'react-native-design-utility';
import { Image, TouchableOpacity } from 'react-native';
import { images } from '../../resources/Images';
import { NavigationServices } from '../../api/NavigationService';

class ShoppingCartIcon extends PureComponent {
  state = {}

  handlePress = () => {
    NavigationServices.navigate("ShoppingCart")
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress} style={{ flex: 1 }}>
        <Box mr={15}>
          <Image
            style={{ width: 25 }}
            source={images.shoppingCart}
            resizeMode="contain"
          />
        </Box>
      </TouchableOpacity>
    );
  }
}

export default ShoppingCartIcon;