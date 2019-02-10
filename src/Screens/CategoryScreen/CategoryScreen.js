import React, { PureComponent } from 'react';
import { Box } from 'react-native-design-utility';
import { connect } from "react-redux";
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
            this.props.products.map((product, i) => (
              <Box key={product.id}>
                <ProductCard
                  index={i}
                  product={product}
                  products={this.props.products}
                />
              </Box>
            ))
          }

        </ScrollView>
      </Box>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.products
  }
}

export default connect(mapStateToProps)(CategoryScreen);