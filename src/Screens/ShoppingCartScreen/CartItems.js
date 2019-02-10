import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Icon from "react-native-vector-icons/Feather";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { incCartQty, decCartQty, modifyProductsStore } from "../../Store/actions/productAction";
import { addProductToCart } from "../../Store/actions/cartActions";
import ProductIsHover from '../CommonComponent/ProductIsHover';
import { theme } from '../../constants/theme';

const customLayoutAnim = {
  duration: 200,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut
  }
}

class CartItem extends PureComponent {
  state = {
    isHover: false
  }

  componentDidMount() {
    this.setState({
      isHover: false
    })
  }

  componentWillUnmount = () => {
    this.setState({
      isHover: false
    })

    LayoutAnimation.configureNext(customLayoutAnim);
  };

  modifyCart = (product) => {
    const cartArray = [...this.props.cartProducts];
    const inCartIndex = cartArray.findIndex(el => el.id === product.id)

    if (inCartIndex !== -1) {
      cartArray.splice(inCartIndex, 1, product)
      this.props.addProductToCart(cartArray)
    }
  }

  handleInc = () => {
    const products = [...this.props.cartProducts];
    const entry = products.findIndex(el => el.id === this.props.product.id);

    if (entry !== -1) {
      const product = {
        ...products[entry],
        cartQty: this.props.product.cartQty + 1
      };
      this.modifyCart(product)
      products.splice(entry, 1, product)

      this.props.incCartQty(products)
    }
  }

  handleDec = () => {
    const newProducts = [...this.props.cartProducts]
    const entry = this.newProducts.findIndex(el => el.id === this.props.product.id);

    if (entry !== -1) {

      const product = {
        ...newProducts[entry],
        cartQty: this.props.product.cartQty - 1
      };

      this.modifyCart(product)

      newProducts.splice(entry, 1, product)

      this.props.decCartQty(newProducts)
    }
  }

  render() {
    const { imageUrl, name, kgPrice, cartQty } = this.props.product;
    const { removeFromCart } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => this.setState({ isHover: false })}>
        <Box dir="row" align="center" bg="white" p="xs" onPress={() => this.setState({ isHover: false })}>
          <Box f={0.3} p="xs" >
            <Image
              style={styles.img}
              resizeMode="contain"
              source={imageUrl}
            />
          </Box>
          <Box f={1} pl="xs" >
            <Box mb="xs">
              <Text bold>{name}</Text>
              <Text color="greyDark">At ${kgPrice}/kg</Text>
            </Box>
            <Box>
              <TouchableOpacity onPress={removeFromCart}>
                <Box dir="row" align="center">
                  <Icon
                    name="trash-2"
                    color={theme.color.green}
                    size={theme.text.size.sm}
                  />
                  <Text color="greyDark">
                    remove
                </Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
          <Box center mr="lg" position="relative">
            <TouchableOpacity onPress={() => this.setState({ isHover: true })}>
              <Box
                w={45}
                h={35}
                center
                style={{
                  borderWidth: 1,
                  borderColor: theme.color.greyLighter,
                  marginLeft: "auto"
                }}
                radius={6}
              >
                <Text bold>
                  {cartQty}
                </Text>
              </Box>
            </TouchableOpacity>
            {
              this.state.isHover && (
                <ProductIsHover
                  isHover={this.state.isHover}
                  handleDec={() => this.handleDec()}
                  handleInc={() => this.handleInc()}
                  product={this.props.product}
                  closeHoverState={() => this.closeHoverState()}
                  containerStyle={{
                    top: -1,
                    left: -25,
                    right: -25,
                    zIndex: 10
                  }}
                />
              )
            }
          </Box>
          <Box>
            <Text>${(cartQty * kgPrice).toFixed(2)}</Text>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  img: {
    width: "100%",
    height: 100,
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);