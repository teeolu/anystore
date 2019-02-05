import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { inject } from "mobx-react/native";

class ShoppingCartScreen extends PureComponent {
  static navigationOptions = {
    title: "My cart"
  }

  state = {}

  renderProdList = () => {
    const { products } = this.props.shoppingCartStore;

    console.log(this.props.shoppingCartStore)

    if (products.length === 0) {
      return (
        <Box>
          <Text>Your cart is empty</Text>
        </Box>
      )
    }

    return products.map(product => (
      <Box key={product.id} dir="row" align="center">
        <Text>{product.name}</Text>
        <Text>Qtty: {product.cartQty}</Text>
      </Box>
    ))
  }

  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="light-content" />
        {this.renderProdList()}
      </Box>
    );
  }
}

export default inject("shoppingCartStore")(ShoppingCartScreen);