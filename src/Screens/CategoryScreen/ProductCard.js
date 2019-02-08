import React, { Component } from 'react';
import { Box } from 'react-native-design-utility';
import { connect } from "react-redux";
import { Animated } from 'react-native';
import { bindActionCreators } from "redux";

import { incCartQty, decCartQty } from "../../Store/actions/productAction";
import { addProductToCart } from "../../Store/actions/cartActions";
import ProductDetail from './ProductDetail';
import ProductPlusButton from './ProductPlusButton';
import ProductIsHover from './ProductIsHover';


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
    let cartArray = [...this.props.cartProducts];

    this.fadeIn();
    this.setState({ isHover: true });

    cartArray.unshift(this.props.product);
    this.props.addProductToCart(cartArray);
  }

  closeHoverState = () => {
    this.fadeOut();
    this.setState({ isHover: false });
  }

  handleInc = () => {

    const newProducts = [...this.props.products]

    const entry = this.props.index

    if (entry || entry === 0) {

      const product = { ...newProducts[entry], cartQty: this.props.product.cartQty + 1 }

      newProducts.splice(entry, 1, product)

      this.props.incCartQty(newProducts)
    }
  }

  handleDec = () => {

    const newProducts = [...this.props.products]

    const entry = this.props.index

    if (entry || entry === 0) {

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
          closeHoverState={() => this.closeHoverState()}
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
  bindActionCreators({ incCartQty, decCartQty, addProductToCart }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);