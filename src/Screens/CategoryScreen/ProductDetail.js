import React from 'react';
import { TouchableWithoutFeedback, Animated, Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

const ProductDetail = ({ product, onPress, cardOpacity }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <Animated.View style={{ opacity: cardOpacity }}>
        <Box>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={product.imageUrl}
          />
        </Box>

        <Box>
          <Text left size="sm" bold>${product.unityPrice}</Text>
          <Text left size="xs">{product.name}</Text>
          <Text left size="xs" color="greyLight">at ${product.kgPrice}/kg</Text>
        </Box>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = {
  img: {
    height: 100,
    width: 120,
  }
}

export default ProductDetail;