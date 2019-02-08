import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from "react-native-design-utility";

import { NavigationServices } from '../../api/NavigationService';

class CategoryCard extends PureComponent {
  state = {}

  handlePress = () => {
    NavigationServices.navigate("Category", { name: this.props.title })
  }

  render() {
    const { title, image } = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress} style={{ flex: 1 }}>
        <Box f={1} center>
          {
            image && (
              <Box mb="sm">
                <Image source={image} />
              </Box>
            )
          }
          <Box>
            <Text size="sm" capitalizeEach center color="greyDarker">{title}</Text>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  }
}

export default CategoryCard;