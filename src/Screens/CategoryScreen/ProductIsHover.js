import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../constants/theme';

const ProductIsHover = ({ isHover, handleDec, handleInc, closeHoverState, product }) => {
  return (
    <>
      {
        isHover && (
          <Box
            shadow={0}
            position="absolute"
            style={{
              top: 10,
              left: 10,
              right: 10,
              zIndex: 10
            }}
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

export default ProductIsHover;