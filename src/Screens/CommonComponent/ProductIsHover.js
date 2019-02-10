import React, { PureComponent } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../constants/theme';

class ProductIsHover extends PureComponent {
  state = {
    cardOpacity: new Animated.Value(1)
  }

  render() {
    const { 
      isHover, 
      containerStyle, 
      removeFromCart, 
      handleDec, 
      handleInc, 
      closeHoverState, 
      product 
    } = this.props;
    
    return (
      <>
        {
          isHover && (
            <Box
              shadow={0}
              position="absolute"
              style={containerStyle}
            >
              <Box dir="row" align="center" justify="between" bg="white" p="xs">
                {
                  product.cartQty > 0 ? (
                    <TouchableOpacity
                      onPress={handleDec}
                    >
                      <Icon
                        name="minus"
                        size={20}
                        color={theme.color.green}
                      />
                    </TouchableOpacity>
                  ) : (
                      <TouchableOpacity
                        onPress={closeHoverState}
                      >
                        <Icon
                          name="trash-2"
                          size={20}
                          onPress={removeFromCart}
                          color={theme.color.green}
                        />
                      </TouchableOpacity>
                    )
                }

                <Text>{product.cartQty}</Text>

                <TouchableOpacity
                  onPress={handleInc}
                >
                  <Icon
                    name="plus"
                    size={20}
                    color={theme.color.green}
                  />
                </TouchableOpacity>
              </Box>
            </Box>
          )
        }
      </>
    );
  }
}

export default ProductIsHover;