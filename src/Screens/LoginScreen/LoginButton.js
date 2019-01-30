import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { images } from '../../resources/Images';

const LoginButton = ({ children, icon, bgColor, type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box w="80%" self="center" p="xs" shadow={1} bg={bgColor} radius="xs" mb="sm" dir="row">
        <Box mr="sm">
          <Box bg="white" h={32} w={32} center>
            <Image
              source={images[icon]}
            />
          </Box>
        </Box>
        <Box>
          <Text size="md" color="white">{children}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

export default LoginButton;