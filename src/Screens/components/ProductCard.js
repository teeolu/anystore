import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { observer } from "mobx-react/native";

import { theme } from '../../constants/theme';



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
    this.fadeIn();
    this.setState({ isHover: true });
    this.props.product.addToCart()
  }

  closeHoverState = () => {
    this.fadeOut();
    this.setState({ isHover: false });
  }

  handleInc = () => {
    this.props.product.incCartQty()
  }

  handleDec = () => {
    this.props.product.decCartQty()
  }

  render() {
    const { isHover, cardOpacity } = this.state;
    const { product } = this.props;

    return (
      <Box bg="white" w={150} p="sm" position="relative">
        <TouchableWithoutFeedback
          onPress={this.closeHoverState}
        >
          <Animated.View style={{ opacity: cardOpacity }}>
            <Box>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={product.imageUrl}
              />
            </Box>

            <Box>
              <Text left size="sm" bold>${product.unityPrice}</Text>
              <Text left size="xs">{product.name}</Text>
              <Text left size="xs" color="greyLight">at ${product.kgPrice}/kg</Text>
            </Box>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={this.handlePlusPress}
        >

          <Box
            circle={25}
            center
            bg={product.cartQty >= 1 ? "green" : "transparent"}
            style={{
              borderColor: theme.color.green,
              borderWidth: 1
            }}
          >
            {
              product.cartQty >= 1 ?
                (
                  <Text color="white">{product.cartQty}</Text>
                ) : (
                  <Icon
                    name="plus"
                    size={20}
                    color={theme.color.green}
                  />
                )
            }
          </Box>
        </TouchableOpacity>
        {
          isHover && (
            <Box
              shadow={0}
              position="absolute"
              style={{
                top: 10,
                left: 10,
                right: 10,
                zIndex: 10
              }}
            >
              <Box dir="row" align="center" justify="between" bg="white" p="xs">
                {
                  product.cartQty >= 1 ? (
                    <TouchableOpacity
                      onPress={() => this.setState({ qtty: this.state.qtty - 1 })}
                    >
                      <Icon
                        name="minus"
                        size={20}
                        color={theme.color.green}
                      />
                    </TouchableOpacity>
                  ) : (
                      <TouchableOpacity
                        onPress={this.closeHoverState}
                      >
                        <Icon
                          name="trash-2"
                          size={20}
                          color={theme.color.green}
                        />
                      </TouchableOpacity>
                    )
                }

                <Text>{product.cartQty}</Text>

                <TouchableOpacity
                  onPress={this.handleInc}
                >
                  <Icon
                    name="plus"
                    size={20}
                    color={theme.color.green}
                  />
                </TouchableOpacity>
              </Box>
            </Box>
          )
        }
      </Box>

    );
  }
}

const styles = {
  img: {
    height: 100,
    width: 120,
  },
  iconBtn: {
    position: "absolute",
    top: 10,
    right: 10
  }
}

export default observer(ProductCard);