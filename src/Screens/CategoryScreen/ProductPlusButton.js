import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../constants/theme';

const ProductPlusButton = ({ product, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.iconBtn}
      onPress={onPress}
    >
      <Box
        circle={25}
        center
        bg={product.cartQty >= 1 ? "green" : "transparent"}
        style={{
          borderColor: theme.color.green,
          borderWidth: 1
        }}
      >
        {
          product.cartQty > 0 ?
            (
              <Text color="white">{product.cartQty}</Text>
            ) : (
              <Icon
                name="plus"
                size={20}
                color={theme.color.green}
              />
            )
        }
      </Box>
    </TouchableOpacity>
  );
}

const styles = {
  iconBtn: {
    position: "absolute",
    top: 10,
    right: 10
  }
}

export default ProductPlusButton;