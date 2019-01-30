import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from "react-native"
import { images } from '../resources/Images';

const OnboardingLogo = () => {
  return (
    <Box f={1} center>
    <Box mb="sm">
      <Image
        source={images.brandLogo}
      />
      </Box>
      <Text size="xl">anyStore</Text>
    </Box>
  );
}
 
export default OnboardingLogo;