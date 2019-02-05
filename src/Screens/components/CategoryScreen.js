import React, { PureComponent } from 'react';
import { Box } from 'react-native-design-utility';
import { inject } from 'mobx-react/native';
import { ScrollView } from 'react-native';

import ProductCard from './ProductCard';

class CategoryScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name")
  })

  state = {}

  render() {
    return (
      <Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            this.props.productsStore.data.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          }

        </ScrollView>
      </Box>
    );
  }
}

export default inject("productsStore")(CategoryScreen);