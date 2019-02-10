import React, { PureComponent } from 'react';
import { Box, Text } from 'react-native-design-utility';
import {connect} from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import { images } from '../../resources/Images';
import { NavigationServices } from '../../api/NavigationService';

class ShoppingCartIcon extends PureComponent {
  handlePress = () => {
    NavigationServices.navigate("ShoppingCart")
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.btn}>
        <Box mr={15}>
          <Image
            style={{ width: 25 }}
            source={images.shoppingCart}
            resizeMode="contain"
          />
        </Box>
        {this.props.cartProducts.length > 0 ?
          (
            <Box style={{ top: -5, right: 3 }} position="absolute" circle={20} bg="red" center>
              <Text color="white" size={12} bold>
                {this.props.cartProducts.length}
              </Text>
            </Box>
          ) : null
        }
      </TouchableOpacity>
    );
  }
}

const styles = {
  btn: {
    flex: 1,
    position: "relative"
  }
}

const mapStateToProps = ({cart}) => {
  return {
    cartProducts: cart.cartProducts
  }
}

export default connect(mapStateToProps)(ShoppingCartIcon);