import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { connect } from "react-redux";



class ShoppingCartScreen extends PureComponent {
  static navigationOptions = {
    title: "My cart"
  }

  state = {}

  renderProdList = () => {
    const { cartProducts } = this.props;

    console.log(this.props.cartProducts)

    if (cartProducts.length === 0) {
      return (
        <Box>
          <Text>Your cart is empty</Text>
        </Box>
      )
    }

    return cartProducts.map(product => (
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

const mapStateToProps = ({ cart }) => {
  return {
    cartProducts: cart.cartProducts,
    cartProduct: cart.cartProduct
  }
}

export default connect(mapStateToProps)(ShoppingCartScreen);