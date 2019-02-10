import React, { Component } from 'react';
import { Box } from 'react-native-design-utility';
import { connect } from "react-redux";
import { Animated } from 'react-native';
import { bindActionCreators } from "redux";

import { incCartQty, decCartQty, modifyProductsStore } from "../../Store/actions/productAction";
import { addProductToCart } from "../../Store/actions/cartActions";
import ProductDetail from './ProductDetail';
import ProductPlusButton from './ProductPlusButton';
import ProductIsHover from '../CommonComponent/ProductIsHover';


class ProductCard extends Component {
  state = {
    isHover: false,
    cardOpacity: new Animated.Value(1)
  }


  fadeIn = () => {
    Animated.timing(this.state.cardOpacity, {
      toValue: 0.4,
      duration: 200
    }).start()
  }

  fadeOut = () => {
    Animated.timing(this.state.cardOpacity, {
      toValue: 1,
      duration: 200
    }).start()
  }

  handlePlusPress = () => {
    this.setState({ isHover: true });
    if (this.props.product.cartQty === 0) {
      this.handleInc()
    }
  }


  closeHoverState = () => {
    this.setState({ isHover: false });
  }

  addToCart = () => {
    const cartArray = [...this.props.cartProducts];
    const inCartIndex = cartArray.findIndex(el => el.id === this.props.product.id)

    if (inCartIndex !== -1) {
      cartArray.splice(inCartIndex, 1, { ...this.props.product, inCart: true })
      this.props.addProductToCart(cartArray)
    } else {
      cartArray.unshift(this.props.product);
      this.props.addProductToCart(cartArray);
    }
  }

  removeFromCart = () => {
    const cartArray = [...this.props.cartProducts];
    const newCartArray = cartArray.filter(el => el.id !== this.props.product.id)
    const products = [...this.props.products]
    const product = { ...this.props.product, inCart: false, cartQty: 0 };

    products.splice(this.props.index, 1, product);

    this.props.modifyProductsStore(products)
    this.props.addProductToCart(newCartArray);
    this.closeHoverState()
  }

  handleInc = () => {
    const products = [...this.props.products];
    const entry = this.props.index;

    if (entry !== -1) {
      this.addToCart()
      const product = { ...products[entry], cartQty: this.props.product.cartQty + 1 }

      products.splice(entry, 1, product)

      this.props.incCartQty(products)
    }
  }

  handleDec = () => {
    const newProducts = [...this.props.products]
    const entry = this.props.index

    if (entry || entry === 0) {
      this.addToCart()

      const product = { ...newProducts[entry], cartQty: this.props.product.cartQty - 1 }

      newProducts.splice(entry, 1, product)

      this.props.decCartQty(newProducts)
    }
  }

  render() {

    return (
      <Box bg="white" w={150} p="sm" position="relative">
        <ProductDetail
          product={this.props.product}
          onPress={() => this.closeHoverState()}
          cardOpacity={this.state.cardOpacity}
        />

        <ProductPlusButton
          product={this.props.product}
          onPress={() => this.handlePlusPress()}
        />

        <ProductIsHover
          isHover={this.state.isHover}
          handleDec={() => this.handleDec()}
          handleInc={() => this.handleInc()}
          product={this.props.product}
          removeFromCart={() => this.removeFromCart()}
          closeHoverState={() => this.closeHoverState()}
          containerStyle={{
            top: 10,
            left: 10,
            right: 10,
            zIndex: 10
          }}
        />
      </Box>

    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cartProducts: cart.cartProducts,
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    incCartQty,
    decCartQty,
    addProductToCart,
    modifyProductsStore
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);