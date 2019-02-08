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
    console.log(this.props.products)

    return (
      <Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            this.props.products.map((product, i) => (
              <ProductCard
                key={product.id}
                index={i}
                product={product}
                products={this.props.products}
              />
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