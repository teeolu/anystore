import React, { PureComponent } from 'react';
import { StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CartItem from './CartItems';
import { theme } from '../../constants/theme';
import { modifyProductsStore } from '../../Store/actions/productAction';
import { addProductToCart } from '../../Store/actions/cartActions';
import CloseBtn from '../CommonComponent/CloseBtn';


class ShoppingCartScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: "My cart",
    headerLeft: <CloseBtn
      left
      color={"black"}
      size={25}
      onPress={() => navigation.goBack(null)}
    />
  })

  state = {}

  renderCardItem = ({ item }) => {
    return <CartItem
      product={item}
      removeFromCart={() => this.removeFromCart(item)}
    />
  }

  removeFromCart = (product) => {
    const cartArray = [...this.props.cartProducts];
    const newCartArray = cartArray.filter(el => el.id !== product.id)
    const products = [...this.props.products]
    const newProduct = { ...product, inCart: false, cartQty: 0 };

    const prodIndex = this.props.products.findIndex(el => el.id === product.id)

    products.splice(prodIndex, 1, newProduct);

    this.props.modifyProductsStore(products)
    this.props.addProductToCart(newCartArray);
  }

  checkOutPrice = () => {
    const sum = (a, b) => a + b;

    const Checkout = this.props.cartProducts
      .map(el => parseFloat(el.kgPrice * el.cartQty))
      .reduce(sum)

    return Checkout
  }

  renderShoppingCartBtn = () => {
    const { cartProducts } = this.props;

    if (cartProducts.length === 0) {
      return null;
    }

    return (
      <Box bg="white" p="xs">
        <TouchableOpacity>
          <Box h={45} bg="grey" center radius={6} position="relative">
            <Text bold color="white">
              Checkout
            </Text>

            <Box position="absolute" bg="greyDark" radius={6} center p="xs" style={{ right: theme.space.xs }}>
              <Text color="white" size="xs">
                ${(this.checkOutPrice()).toFixed(2)}
              </Text>
            </Box>
          </Box>
        </TouchableOpacity>
      </Box>
    )
  }

  renderProdList = () => {
    const { cartProducts } = this.props;

    if (cartProducts.length === 0) {
      return (
        <Box f={1} center>
          <Text>Your cart is empty</Text>
        </Box>
      )
    }

    return <FlatList
      data={cartProducts}
      renderItem={this.renderCardItem}
      keyExtractor={item => item.id}
    />
  }

  render() {
    return (
      <Box f={1}>
        <StatusBar barStyle="light-content" />
        {this.renderProdList()}
        {this.renderShoppingCartBtn()}
      </Box>
    );
  }
}

const mapStateToProps = ({ cart, products }) => {
  return {
    cartProducts: cart.cartProducts,
    cartProduct: cart.cartProduct,
    products: products.products
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addProductToCart,
    modifyProductsStore
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartScreen);